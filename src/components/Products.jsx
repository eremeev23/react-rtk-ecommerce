import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({items}) => {
    let category = items.slug
    const products = items.products

    console.log(category, products)

    return (
        <Container>
            { products.map((item, id) => (
              <Product item={item} params={{category: category}} id={id} key={id}/>
            ))}
        </Container>
    );
};

export default Products;