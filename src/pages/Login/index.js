import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GoogleButton from './GoogleButton/index'

// Styles
import './login.css'

// Layout
import ContentLayout from '../../layout/Content'

const Div = styled.div`
  background-color: white;
  height: 50%;
  width: 50%;
  padding: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Close = styled.span`
  background-color: white;
  color: black;

  margin: 20px 0 40px 0;
`
const HR = styled.hr`
  margin: 20px 0 20px 0;
`

const NAVLink = styled(NavLink)`
  color: black;
  padding: 10px;
`
const Login = () => {
  return (
    <ContentLayout>
      <Div className='Login'>
        <Close>
          <NAVLink to='/'>X</NAVLink>
        </Close>
        <Form>
          <Form.Group>
            <GoogleButton />
          </Form.Group>
          <HR />
          <Form.Group>
            <Form.Control type='email' placeholder='Enter Email' />
          </Form.Group>
          <Form.Group>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group>
            <Button style={{ width: '100%', margin: '10px 0 10px 0' }}>
              Login
            </Button>
          </Form.Group>
          <Form.Group>
            <Button style={{ width: '100%', margin: '10px 0 10px 0' }}>
              Signup
            </Button>
          </Form.Group>
        </Form>
      </Div>
    </ContentLayout>
  )
}

export default Login
