import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
`

const EmptyCart = () => {
  return (
    <Container>
      The Cart is empty
    </Container>
  );
};

export default EmptyCart;