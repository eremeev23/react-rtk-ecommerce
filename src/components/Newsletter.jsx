import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #f5fbfc;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 70px;
`

const Description = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
`

const InputContainer  = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: #fff;
  border: 1px solid lightgray;
`

const Input  = styled.input`
  flex: 8;
  padding: 0 20px;
  font-size: 18px;
  border: none;
  outline: none;
`

const Button  = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input type="email" placeholder="Your email" required />
                <Button type="submit">
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;