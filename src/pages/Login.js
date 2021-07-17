import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'
import { useForm } from '../utils/hooks'

const Login = () =>{
    const {onChange, onSubmit, value} = useForm(loginUserCallback,{
        username: '',
        password: ''
    })

    const loginUser = async () =>{
        const res = await axios.get('https://graph.resnal.ml:2019/api/students/login/', value)
        console.log(res)
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