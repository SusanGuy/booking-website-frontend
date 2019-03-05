import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { GoogleLogin } from 'react-google-login'

// Layout
import ContentLayout from '../../layout/Content'

const Div = styled.div`
  border-radius: 1.5%;
  width: 45%;
  height: 45%;
  background-color: white;
  padding: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: relative;
  @media only screen and (max-width: 800px) {
    width: 90%;
    height: 50%;
  }
`
const Close = styled.div`
  background-color: white;
  color: black;
  position: absolute;
  top: 1px;
  left: 1px;
  margin: 10px;
`

const HRWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const HRDiv = styled.div`
  width: 100%;
`
const HR = styled.hr``

const HRDivText = styled.div`
  padding: 0px 10px 0px 10px;
`
const HRText = styled.p``

const NAVLink = styled(NavLink)`
  color: black;
  padding: 10px;
`
const StyledGoogleLogin = styled(GoogleLogin)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0 20px 0;

  &:hover {
    background-color: cornflowerblue;
  }
`

const config = {
  GOOGLE_CLIENT_ID:
    '1047753473052-ecs3jgoau4l0j5s686hbourbg0rs99si.apps.googleusercontent.com'
}

const googleResponse = response => {
  console.log('response', response)
  /* const tokenBlob = new Blob(
    [JSON.stringify({ access_token: response.accessToken }, null, 2)],
    { type: 'application/json' }
  );
  const options = {
    method: 'POST',
    body: tokenBlob,
    mode: 'cors',
    cache: 'default',
  };
  fetch('http://localhost:5000/auth/google', options).then(r => {
    const token = r.headers.get('x-auth-token');
    r.json().then(user => {
      if (token) {
        this.setState({ isAuthenticated: true, user, token });
      }
    });
  }); */
}

const onFailure = response => {
  console.log('failure:', response)
}

const Login = () => {
  return (
    <ContentLayout>
      <Div className='Login'>
        <Close>
          <NAVLink to='/'>X</NAVLink>
        </Close>
        <Form>
          <Form.Group>
            <StyledGoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText='Login'
              onSuccess={googleResponse}
              onFailure={onFailure}
            />
          </Form.Group>
          <HRWrap>
            <HRDiv>
              <HR />
            </HRDiv>
            <HRDivText>
              <HRText>Or</HRText>
            </HRDivText>
            <HRDiv>
              <HR />
            </HRDiv>
          </HRWrap>
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
            <NavLink to='/signup'>
              <Button style={{ width: '100%', margin: '10px 0 10px 0' }}>
                Signup
              </Button>
            </NavLink>
          </Form.Group>
        </Form>
      </Div>
    </ContentLayout>
  )
}

export default Login
