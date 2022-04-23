import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import BackButton from "../components/BackButton";
import SwitchFormButton from "../components/SwitchFormButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useSelector} from "react-redux";


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
  outline: none;
  background-color: transparent;

  &:focus ~ label {
    bottom: 80%;
    font-size: 12px;
    opacity: 1;
  }

  &:valid ~ label {
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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector(state => state.user.users.filter(function (item) {
    return item.password === password ?? item.email === email
  }))
  // const i = useSelector(state => state.user)

  const submitForm = e => {
    e.preventDefault()
    console.log(users)
  }
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  // function emailTest(input) {
  //   return /.+@.+\..+/i.test(input.value);
  // }
  //
  // const emailHandler = e => {
  //   setEmail(e.target.value);
  //
  // }


  return (
    <Container>
      <Wrapper>
        <Header>
          <BackButton url={"/"} />
          <SwitchFormButton text="Sign Up" url="/sign-up" />
        </Header>
        <Title>Log in your account</Title>
        <Form onSubmit={e => submitForm(e)}>
          <InputWrapper>
            <Input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" className="input-email" required/>
            <Label htmlFor="email" className="label-email">
              <span>E-mail</span>
            </Label>
          </InputWrapper>
          <InputWrapper>
            <Input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" className="input-pass" minlength="6" required/>
            <Label htmlFor="password" className="label-pass"><span>Password</span></Label>
            <HideButton>
              <VisibilityOff />
            </HideButton>
          </InputWrapper>
          <Forgot href="#">Forgot password?</Forgot>
          <Button type="submit">LOG IN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};