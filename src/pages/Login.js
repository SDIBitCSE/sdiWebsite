import axios from 'axios';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'
import { useForm } from '../utils/hooks'
import { AuthContext } from '../context/context'

const Login = () =>{
    const {onChange, onSubmit, value} = useForm(loginUserCallback,{
        username: '',
        password: ''
    })

    const context = useContext(AuthContext)

    const loginUser = async () =>{
        const res = await axios.get('https://www.boredapi.com/api/activity', {
            headers:{
                value
            }
        });
        context.login(res.data)
    }
    function loginUserCallback(){
        loginUser()
    }
    const loading = false;
    return(
        <div className="form-container">
        <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
            <Form.Input 
                label='Username'
                placeholder='Username'
                onChange={onChange}
            />
            <Form.Input 
                label='Password'
                placeholder='Password'
                onChange={onChange}
                type='password'
            />
            <Form.Group>
            <Button type="submit" color='teal'>Login</Button>
            <Button as={Link} to='/signup' color='blue'>Signup</Button>
            </Form.Group>
        </Form>
        
        </div>
    )
}

export default Login;