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
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`

const BackButton = ({url}) => {
  const navigate = useNavigate();

  if (!url) {
    return (
      <Container  onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
        Back
      </Container>
    );
  } else {
    return(
    <Container>
      <Link to={`${url}`}>
        <KeyboardBackspaceIcon />
        Home
      </Link>
    </Container>


    )
  }


};

export default BackButton;