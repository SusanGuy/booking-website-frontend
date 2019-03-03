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

const HRDivWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const HRDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const HR = styled.hr`
  width: 100%;
`

const HRTextDiv = styled.div`
  margin: 1vmin;
`

const HRText = styled.p``

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
          <HRDivWrap>
            <HRDiv>
              <HR />
            </HRDiv>
            <HRTextDiv>
              <HRText>Or</HRText>
            </HRTextDiv>
            <HRDiv>
              <HR />
            </HRDiv>
          </HRDivWrap>

          <Form.Control type='email' placeholder='Enter Email' />

          <Form.Control type='password' placeholder='Password' />

          <Button
            variant='primary'
            style={{ width: '100%', margin: '10px 0 10px 0' }}
          >
            Login
          </Button>

          <Button style={{ width: '100%', margin: '10px 0 10px 0' }}>
            Signup
          </Button>
        </Form>
      </Div>
    </ContentLayout>
  )
}

export default Login
