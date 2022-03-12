import React from 'react';
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {Link} from "react-router-dom";

const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
  }

  svg {
    margin-right: 7px;
  }
`

const BackButton = () => {
  return (
    <Container>
      <Link to='/'>
        <KeyboardBackspaceIcon />
        Home
      </Link>
    </Container>
  );
};

export default BackButton;