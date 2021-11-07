import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  width: 98%;
  object-fit: cover;
`
const Info = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background: #00000061;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
`
const Button = styled.button`

`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
