import React from 'react';
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {Link, useNavigate} from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: inherit;

  svg {
    margin-right: 7px;
  }
`

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container  onClick={() => navigate(-1)}>
      <KeyboardBackspaceIcon />
      Back
    </Container>
  );
};

export default BackButton;