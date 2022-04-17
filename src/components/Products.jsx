import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 20px;
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