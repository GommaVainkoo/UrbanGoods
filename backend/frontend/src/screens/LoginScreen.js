import React, { useState, useEffect } from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

export default function LoginScreen() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }
  return (
    <FormContainer>
        <h1>SIGN IN</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='email'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type='username'
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                >
                </Form.Control>
            </Form.Group>


            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            
            <Button type='submit' variant='primary'style={{ marginTop: '15px' }}>
                Sign In
            </Button>
        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Register
                    </Link>
            </Col>
        </Row>

    </FormContainer>    
  )
}
