import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  @media screen and (max-width: 768px) {
    padding: 20px 20px 80px;
    height: fit-content;
    justify-content: flex-start;
  }
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 70px;

  &.hidden {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 48px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 550px) {
    font-size: 36px;
    margin-bottom: 10px;
  }
`

const Description = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;

  &.hidden {
    display: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 550px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: #fff;
  border: 1px solid lightgray;

  &.hidden {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 36px;
  }
`

const Input = styled.input`
  flex: 8;
  padding: 0 10px;
  font-size: 18px;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const error = keyframes`
  0% {
    left: 0;
  }

  20% {
    left: -5px;
  }

  40% {
    left: 5px;
  }

  60% {
    left: -5px;
  }

  80% {
    left: 5px;
  }

  100% {
    left: 0;
  }
`

const Error = styled.p`
  position: absolute;
  display: none;
  left: 0;
  bottom: -20px;
  font-size: 12px;
  font-weight: 700;
  color: #df2727;

  &.error {
    display: flex;
    animation: ${error} .3s linear;
  }

  &.hidden {
    display: none;
  }
`

const Button  = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
`

const Policy = styled.p`
  position: absolute;
  bottom: -40px;
  font-size: 14px;
  
  a {
    margin-left: 3px;
    color: teal;
    font-weight: 700;
  }
  
  @media screen and (max-width: 1100px) {
    bottom: -60px;
  }

  @media screen and (max-width: 768px) {
    bottom: -40px;
    font-size: 13px;
  }

  @media screen and (max-width: 550px) {
    bottom: -62px;
    line-height: 110%;
  }
`

const Success = styled.div`
  display: none;
  text-align: center;

  svg {
    width: 50px;
    height: 50px;
    fill: #11c011;
  }

  &.success {
    display: block;
  }
  
  @media screen and (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const emailTest = email => {
      return /.+@.+\..+/i.test(email);
    }

    const inputHandler = email => {
      setEmail(email);
      setError(false);
    }

    const submitHandler = e => {
      e.preventDefault();
      setError(false);

      if (emailTest(email)) {
        setError(false);
        setSuccess(true);
        setEmail('')

        setTimeout(() => {
          setSuccess(false);
        }, 5000)
      } else {
        setError(true)
      }
    }

    return (
        <Container>
            <Title className={success ? "hidden" : ""}>Newsletter</Title>
            <Description className={success ? "hidden" : ""}>Get timely updates from your favorite products.</Description>

            <Form action="" onSubmit={e => submitHandler(e)} className={success ? "hidden" : ""} novalidate>
                <Input type="text" onChange={e => inputHandler(e.target.value)} value={email} placeholder="Your email" />
                <Button type="submit">
                  <SendIcon />
                </Button>
                <Policy>
                  I consent to the processing of my personal data in accordance with the <Link to="/policy">PRIVACY POLICY</Link>
                </Policy>
                <Error className={error ? "error" : "hidden"}>Type your email</Error>
            </Form>

            <Success className={success ? "success" : "hidden"}>
              <Title>
                <CheckCircleIcon /> Success!
              </Title>
              <Description>Now you are able to take a news about our products.</Description>
            </Success>
        </Container>
    );
};

export default Newsletter;