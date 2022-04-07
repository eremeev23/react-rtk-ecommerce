import React, { useState } from 'react';
import styled from 'styled-components';
import Newsletter from "../components/Newsletter";
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSelector } from "react-redux";

const Container = styled.div`

`

const ContentWrapper = styled.div`
  padding: 15px 50px;
`

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;  
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const Title = styled.h1`
  font-weight: 500;
`

const Desc = styled.p`
  margin: 20px 0;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: .3px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  margin-right: 5px;
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.input`
  position: relative;
  margin: 0 25px 0 5px;
  width: 0;
  height: 0;
  
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: ${props => props.color};
  }

  &:checked::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    transform: translateY(-50%) translateX(-4px);
    background-color: aliceblue;
    border: 3px solid teal;
    border-radius: 50%;
    z-index: -1;
    transition: border .1s ease-in-out;
  }
`

const FilterSize = styled.select`
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #393939;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  margin-top: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  box-sizing: border-box;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid teal;
`

const Button = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid teal;
  background-color: transparent;
  font-weight: 500;
  transition: background-color .2s ease-in-out, color .3s ease-in-out;

  &:hover {
    background-color: teal;
    color: #fff;
  }

  &:active {
    background-color: #005f5f;
  }
`

export const Product = ({match}) => {
  let params = useParams();
  let location = useLocation();
  let category = location.pathname.split('/')[1];
  let product = useSelector(state => Object.values(Object.entries(state).filter(item => item[0] === category)[0][1])[0].filter(elem => elem.id == params.id)[0])

  const [num, setNum] = useState(1);

  const numHandler = action => {
    if (action === "plus") {
      num < 10 ? setNum(num + 1) : setNum(10)
    } else {
      num > 1 ? setNum(num - 1) : setNum(1)
    }
  }

  const handleColor = e => {
    const radios = document.querySelectorAll('input[type=radio]');

    radios.forEach(el => el.removeAttribute('checked'))

    e.target.setAttribute('checked', true)
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <ContentWrapper>
        <BackButton/>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>{product.description}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                { product.colors.map((item, id) => (
                  <FilterColor type="radio" name="color" id={id} value={item} color={item} key={id} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  { product.sizes.map((item, id) => (
                    <FilterSizeOption value={item} key={id}>
                      {item}
                    </FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => numHandler("minus")} style={{cursor: "pointer"}}/>
                <Amount>{num}</Amount>
                <Add onClick={() => numHandler("plus")} style={{cursor: "pointer"}}/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </ContentWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
