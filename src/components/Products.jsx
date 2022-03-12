import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            { popularProducts.map((item, id) => (
                <Product item={item} key={id}/>
            ))}
        </Container>
    );
};

export default Products;