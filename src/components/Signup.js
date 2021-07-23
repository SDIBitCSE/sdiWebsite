import React, { useContext } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from '../utils/hooks'
import { AuthContext } from '../context/context'
import axios from 'axios'

const Signup = () =>{
    const context = useContext(AuthContext)
    const {onChange, onSubmit, value} = useForm(signupUserCallback,{
        username: '',
        password: '',
        consfirmPassword: ''
    })

    const signupUser = async () =>{
        const res = await axios.post('https://httpbin.org/post', {
            value
        });
        console.log(res)
        context.login(res.data)
    }

    function signupUserCallback(){
        signupUser()
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
                type='password'
                onChange={onChange}
            />
            <Form.Input
                label='Confirm Password'
                placeholder='Confirm Password'
                type='password'
                onChange={onChange}
            />
            <Button type="submit" color='teal'>Signup</Button>
        </Form>
        </div>
    )
}

export default Signup