import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 2px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
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
  transition: background .3s ease-in-out;

  &:hover {
    background: #00000090;
  }
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 4px;
  font-size: 22px;
  transition: color .3s ease-in-out, background .3s ease-in-out;
  
  &:hover {
    color: #191919;
    background: #fff;
  }
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
