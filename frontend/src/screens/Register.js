import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Messages from '../components/Messages'
import Loader from '../components/Loader'
import {register} from '../actions/userAction'
import FormConatiner from '../components/FormConatiner'

const Register = ({location, history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [messages, setMessages] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister


    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessages('Password do not match')
        } else {
            dispatch(register(name, email, password))
        }
      
    }

    return (
        <FormConatiner>
            <h1>Sign Up</h1>
            { messages && <Messages variant='danger'>{messages}</Messages>}
            {error && <Messages variant='danger'>{error}</Messages>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Adress
                    </Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>
                       Confirm Password
                    </Form.Label>
                    <Form.Control type='confirmPassword' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign Up</Button>
            </Form>


            <Row className='py-3'>
                <Col>
                Have an Account? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Login</Link>
                </Col>
            </Row>
        </FormConatiner>
    )
}

    
       
    


export default Register
