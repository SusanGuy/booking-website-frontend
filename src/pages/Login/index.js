import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { GoogleLogin } from 'react-google-login';

// Layout
import ContentLayout from '../../layout/Content';

const Div = styled.div`
  background-color: white;

  padding: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
`;
const Close = styled.span`
  background-color: white;
  color: black;
  margin: 20px 0 40px 0;
`;
const HR = styled.hr`
  margin: 20px 0 20px 0;
`;

const NAVLink = styled(NavLink)`
  color: black;
  padding: 10px;
`;

const config = {
  GOOGLE_CLIENT_ID:
    '1047753473052-ecs3jgoau4l0j5s686hbourbg0rs99si.apps.googleusercontent.com',
};

const googleResponse = response => {
  console.log('response', response);
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
};

const onFailure = response => {
  console.log('failure:', response);
};

const Login = () => {
  return (
    <ContentLayout>
      <Div className="Login">
        <Close>
          <NAVLink to="/">X</NAVLink>
        </Close>
        <Form>
          <Form.Group>
            <GoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={googleResponse}
              onFailure={onFailure}
            />
          </Form.Group>
          <HR />
          <Form.Group>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
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
  );
};

export default Login;
