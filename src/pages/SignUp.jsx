import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BackButton from "../components/BackButton";
import SwitchFormButton from "../components/SwitchFormButton";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import VisibilityOn from "@material-ui/icons/Visibility";
import {LOG_IN, SIGN_UP} from "../store/reducers/userSlice";

const fadeIn = keyframes`
 0% { opacity: 1;}
 100% { opacity: 0;}
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(60deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))
  , url("https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center;
  background-size: cover;
  
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    animation: ${fadeIn} .3s ease-in-out;
    z-index: 100;
    pointer-events: none;
  }
`

const Wrapper = styled.div`
  width: 360px;
  padding: 15px 30px 30px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
`

const Header = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 22px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  position: relative;
  margin: 15px 0 0;
`

const Label = styled.label`
  position: absolute;
  bottom: 5px;
  left: 0;
  opacity: .6;
  pointer-events: none;
  font-size: 16px;
  transition: font-size .2s ease-in-out, bottom .2s ease-in-out, opacity .3s ease-in-out;
`

const Input = styled.input`
  flex: 1;
  padding: 10px 0 5px;
  min-width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #232323;
  outline: none;
  background-color: transparent;

  &:focus ~ label, &.valid ~ label {
    bottom: 80%;
    font-size: 12px;
    opacity: 1;
  }

  &:valid ~ label, &.valid ~ label {
    bottom: 80%;
    font-size: 12px;
    opacity: 1;
  }
`

const Agreement = styled.p`
  margin: 15px 0;
  font-size: 12px;
  font-weight: 600;

  a {
    text-decoration: none;
    color: teal;
    font-size: 13px;
    font-weight: 700;
  }
`

const Button = styled.button`
  cursor: pointer;
  padding: 15px;
  background-color: transparent;
  border: 2px solid #232323;
  font-weight: 700;
  font-size: 20px;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;

  &:hover {
    background-color: #232323;
    color: #fff;
  }

  &:disabled {
    border: 2px solid #7d7d7d;
    color: #7d7d7d;
  }

  &:disabled:hover {
    background-color: transparent;
    border: 2px solid #7d7d7d;
    color: #7d7d7d;
  }
`

const HideButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;

  svg {
    width: 20px;
  }
`

const Error = styled.p`
  font-size: 12px;
  color: #e31313;
`

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [emailError, setEmailError] = useState('error');
  const [nameError, setNameError] = useState('error');
  const [passwordError, setPasswordError] = useState('error');
  const [confirmError, setConfirmError] = useState('error');
  const [passwordType, setPasswordType] = useState('password');
  const [confirmType, setConfirmType] = useState('password');
  const id = new Date().toISOString();

  const users = useSelector(state => state.user.users);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const signUp = user => dispatch(SIGN_UP(user));
  const login = userInfo => dispatch(LOG_IN(userInfo));

  // This field must be the same as Password
  // Enter a secure password: At least 8 characters long

  const emailHandler = e => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Type your e-mail');

      if(e.target.value) {
        setEmailError('Wrong e-mail');
      }
    } else {
      setEmailError('');
    }
  }

  const nameHandler = e => {
    setName(e.target.value);

    if (e.target.value.length < 2) {
      setNameError('Type your name');
    } else {
      setNameError('');
    }
  }

  const passwordHandler = e => {
    setPassword(e.target.value)

    if (e.target.value.length < 6) {
      setPasswordError('Enter a secure password: at least 6 characters long')
    } else {
      setPasswordError('')
    }
  }

  const confirmHandler = e => {
    setConfirm(e.target.value)

    if (e.target.value !== password) {
      setConfirmError('This field must be the same as Password')
    } else {
      setConfirmError('')
    }
  }

  const showPassword = e => {
    e.preventDefault();

    if (passwordType === 'password') {
      setPasswordType('text')
    } else {
      setPasswordType('password')
    }
  }

  const showConfirm = e => {
    e.preventDefault();

    if (confirmType === 'password') {
      setConfirmType('text')
    } else {
      setConfirmType('password')
    }
  }

  const validForm = () => {
    return nameError === '' && emailError === '' && passwordError === '' && confirmError === '';
  }

  const submitForm = e => {
    e.preventDefault();

    if (validForm()) {
      if (users.some(user => user.email === email)) {
        alert('An account with this email already exists.')
      } else {
        const user = {
          id,
          name,
          email,
          password
        }

        signUp(user)
        login(user)
        navigate('/')
      }
    } else {
      alert('Error')
    }
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <BackButton url={"/"}/>
          <SwitchFormButton text="Login" url="/log-in" />
        </Header>
        <Title>CREATE AN ACCOUNT</Title>
        <Form action="" onSubmit={e => submitForm(e)} novalidate>
          <InputWrapper>
            <Input type="text"
                   id="name"
                   className="input-name"
                   value={name}
                   onChange={e => nameHandler(e)}
                   required
            />
            <Label htmlFor="name" className="label-name"><span>Name</span></Label>
          </InputWrapper>
          <Error>
            {nameError !== "error" ? nameError : null}
          </Error>
          <InputWrapper>
            <Input type="email"
                   id="email"
                   className={email ? 'valid input-email' : 'input-email'}
                   value={email}
                   onChange={e => emailHandler(e)}
                   required
            />
            <Label htmlFor="email" className="label-email"><span>E-mail</span></Label>
          </InputWrapper>
          <Error>
            {emailError !== "error" ? emailError : null}
          </Error>
          <InputWrapper>
            <Input type={passwordType}
                   id="password"
                   className="input-pass"
                   minlength="6"
                   value={password}
                   onChange={e => passwordHandler(e)}
                   required />
            <Label htmlFor="password" className="label-pass"><span>Password</span></Label>
            <HideButton onClick={showPassword}>
              { passwordType === 'password' ? <VisibilityOff /> : <VisibilityOn /> }
            </HideButton>
          </InputWrapper>
          <Error>
            {passwordError !== "error" ? passwordError : null}
          </Error>
          <InputWrapper>
            <Input type={confirmType}
                   id="confirm"
                   className="input-confirm"
                   minlength="6"
                   value={confirm}
                   onChange={e => confirmHandler(e)}
                   required />
            <Label htmlFor="confirm" className="label-confirm"><span>Confirm password</span></Label>
            <HideButton onClick={showConfirm}>
              { confirmType === 'password' ? <VisibilityOff /> : <VisibilityOn /> }
            </HideButton>
          </InputWrapper>
          <Error>
            {confirmError !== "error" ? confirmError : null}
          </Error>
          <Agreement>
            I consent to the processing of my personal data in accordance with the <Link to="/policy">PRIVACY POLICY</Link>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};