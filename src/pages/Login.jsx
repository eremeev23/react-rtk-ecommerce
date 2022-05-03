import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import BackButton from "../components/BackButton";
import SwitchFormButton from "../components/SwitchFormButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import VisibilityOn from "@material-ui/icons/Visibility";
import {useDispatch, useSelector} from "react-redux";
import {LOG_IN} from "../store/reducers/userSlice";


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
  background: linear-gradient(240deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))
  , url("https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center;
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
  
  @media screen and (max-width: 540px) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
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
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  position: relative;
  margin: 15px 0;
  
  &:last-child {
    margin-bottom: 5px;
  }
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
  border-radius: 0;
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

const Forgot = styled.a`
  text-decoration: none;
  color: teal;
  font-size: 12px;
`

const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
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

const ErrorText = styled.p`
  margin: 20px 0 0;
  color: red;
  font-size: 14px;
  font-weight: 500;
  
  a {
    color: teal;
    font-weight: 700;
    text-decoration: underline;
  }
`

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate()

  const user = useSelector(state => state.user.users.filter(function (item) {
    return item.password === password ?? item.email === email
  }))
  const dispatch = useDispatch()

  const login = userInfo => dispatch(LOG_IN(userInfo))

  function submitForm(e) {
    e.preventDefault();
    emailHandler();

    if (!user.length) {
      setEmailError(true)
    } else {
      setEmail('');
      setPassword('');
      setEmailError(false);
      navigate('/');
      login(user[0])
    }
  }

  function showError() {
    if (emailError) {
      return (
        <ErrorText>
          Wrong email or wrong password. Please try again. Or
          <Link to={'/sign-up'}> sign-up</Link>
        </ErrorText>
      )
    } else {
      return null
    }
  }

  function emailTest(input) {
    return /.+@.+\..+/i.test(input.value);
  }

  const emailHandler = () => {
    emailTest(email) ? setEmailError(false) : setEmailError(true)
  }

  function showPassword(e) {
    e.preventDefault();

    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <BackButton url={"/"} />
          <SwitchFormButton text="Sign Up" url="/sign-up" />
        </Header>
        <Title>Log in your account</Title>
        <Form onSubmit={e => submitForm(e)} novalidate="true" >
          <InputWrapper>
            <Input onChange={e => setEmail(e.target.value)} onInput={() => setEmailError(false) } value={email} type="email" id="email" className={email ? 'valid input-email' : 'input-email'} required/>
            <Label htmlFor="email" className="label-email">
              <span>E-mail</span>
            </Label>
          </InputWrapper>
          <InputWrapper>
            <Input onChange={e => setPassword(e.target.value)} value={password} type={inputType} id="password" className="input-pass" minlength="6" required/>
            <Label htmlFor="password" className="label-pass"><span>Password</span></Label>
            <HideButton onClick={e => showPassword(e)}>
              { inputType === 'password' ? <VisibilityOff /> : <VisibilityOn /> }
            </HideButton>
          </InputWrapper>
          <Forgot href="#">Forgot password?</Forgot>
          {showError()}
          <Button type="submit">LOG IN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};