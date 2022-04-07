import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({items}) => {
    const products = items[0];

    return (
        <Container>
            { products.map((item, id) => (
              <Product item={item} id={id} key={id}/>
            ))}
        </Container>
    );
};

export default Products;