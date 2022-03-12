import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  a {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: teal;
  }
`

const SwitchFormButton = props => {
  return (
    <Container>
      <Link to={props.url}>
        {props.text}
      </Link>
    </Container>
  );
};

export default SwitchFormButton;