import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  display: flex;
  overflow: hidden;
`
const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  opacity: .6;
  z-index: 10;
`
const Wrapper = styled.div`
  height: 90%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.2s ease;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
`



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}> 
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg}> 
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}> 
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider