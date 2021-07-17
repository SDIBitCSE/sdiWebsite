import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from '../utils/hooks'

const Signup = () =>{
    const {onChange, onSubmit, value} = useForm(signupUserCallback,{
        username: '',
        password: '',
        consfirmPassword: ''
    })

    const signupUser = () =>{
        console.log('signup')
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