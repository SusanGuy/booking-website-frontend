import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { GoogleLogin } from 'react-google-login';
import KEYS from '../../config';
import { Redirect } from 'react-router-dom';

// Layout
import ContentLayout from '../../layout/Content';

// ContextAPI
import ConfigProvider from '../../context/ConfigProvider';
import AuthProvider from '../../context/AuthProvider';

// Services
import { authenticateWithGoogle } from '../../services/api';
import { storeUserCredentials } from '../../services/localStorage';

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
`;
const Close = styled.div`
  background-color: white;
  color: black;
  position: absolute;
  top: 1px;
  left: 1px;
  margin: 10px;
`;

const HRWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const HRDiv = styled.div`
  width: 100%;
`;
const HR = styled.hr``;

const HRDivText = styled.div`
  padding: 0px 10px 0px 10px;
`;
const HRText = styled.p``;

const NAVLink = styled(NavLink)`
  color: black;
  padding: 10px;
`;

const googleResponse = ({ response, setUser }) => {
  authenticateWithGoogle(response.accessToken).then(r => {
    const token = r.headers.get('x-auth-token');
    r.json().then(user => {
      if (token) {
        setUser(user);
        storeUserCredentials(token);
      }
    });
  });
};

const onFailure = response => {
  console.log(response);
};

const Login = () => {
  return (
    <ContentLayout>
      <AuthProvider.Consumer>
        {({ user, setUser }) => {
          if (user) {
            return <Redirect to="/" />;
          }

          return (
            <Div className="Login">
              <Close>
                <NAVLink to="/">X</NAVLink>
              </Close>
              <ConfigProvider.Consumer>
                {({ authenticated, setAuthenticated, setToken }) => {
                  if (authenticated) {
                    return <Redirect to={{ pathname: '/' }} />;
                  }

                  return (
                    <Form>
                      <Form.Group>
                        <GoogleLogin
                          clientId={KEYS.dev.GOOGLE_CLIENT_ID}
                          buttonText="Login"
                          onSuccess={response =>
                            googleResponse({
                              response,
                              setAuthenticated,
                              setUser,
                              setToken,
                            })
                          }
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
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group>
                        <Button
                          style={{ width: '100%', margin: '10px 0 10px 0' }}
                        >
                          Login
                        </Button>
                      </Form.Group>
                      <Form.Group>
                        <NavLink to="/signup">
                          <Button
                            style={{ width: '100%', margin: '10px 0 10px 0' }}
                          >
                            Signup
                          </Button>
                        </NavLink>
                      </Form.Group>
                    </Form>
                  );
                }}
              </ConfigProvider.Consumer>
            </Div>
          );
        }}
      </AuthProvider.Consumer>
    </ContentLayout>
  );
};

export default Login;
