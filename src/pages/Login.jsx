import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Login.scss'
import '../styles/Home.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
    <div className='homeContainer'>
      <Header />
      <Container className="mt-5">
        <h1>Login</h1>
        <Form className='loginForm'>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  )
}

export default Login

