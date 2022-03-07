import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item, id) => (
        <CategoryItem item={item} key={id}/>
      ))}
    </Container>
  )
}

export default Categories
