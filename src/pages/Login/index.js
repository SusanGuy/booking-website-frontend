import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { GoogleLogin } from 'react-google-login';
import KEYS from '../../config';
import { Redirect } from 'react-router-dom';

// Actions
import * as authActions from '../../actions/auth';
import * as menuActions from '../../actions/menu';

// Selectors
import * as authSelectors from '../../reducers/auth';

// Layout
import ContentLayout from '../../layout/Content';

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

const Login = ({ loginWithGoogleToken, setFixedBarOpened, user }) => {
  const googleResponse = response => {
    loginWithGoogleToken(response.accessToken).catch(res => {
      console.log('res', res);
      setFixedBarOpened({ opened: true, message: res });
    });
  };

  const onFailure = response => {
    console.log(response);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <ContentLayout>
      <Div className="Login">
        <Close>
          <NAVLink to="/">X</NAVLink>
        </Close>
        <Form>
          <Form.Group>
            <GoogleLogin
              clientId={KEYS.dev.GOOGLE_CLIENT_ID}
              buttonText="Login"
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
            <NavLink to="/signup">
              <Button style={{ width: '100%', margin: '10px 0 10px 0' }}>
                Signup
              </Button>
            </NavLink>
          </Form.Group>
        </Form>
      </Div>
    </ContentLayout>
  );
};

function mapStateToProps(state) {
  return {
    user: authSelectors.getUser(state),
  };
}

const actionCreators = {
  loginWithGoogleToken: authActions.loginWithGoogleToken,
  setFixedBarOpened: menuActions.setFixedBarOpened,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
