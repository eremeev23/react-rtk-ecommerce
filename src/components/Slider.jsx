import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 100vw;
  height: 46vw;
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
  
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`
const Wrapper = styled.div`
  height: 46vw;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease-in-out;
`
const Slide = styled.div`
  width: 100vw;
  height: 46vw;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 100%;
  width: 62vw;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`
const Title = styled.h1`
  font-size: 70px;

  @media screen and (max-width: 1024px) {
   font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    margin: 30px 0;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    margin: 15px 0 30px;
    font-size: 14px;
    letter-spacing: 1.2px;
  }

  @media screen and (max-width: 540px) {
    margin: 10px 0 15px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderItems = useSelector(state => state.slides.slides)

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}> 
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, id) => (
          <Slide bg={item.bg} key={id}> 
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link className="shop-now" to={item.slug}>SHOP NOW</Link>
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
