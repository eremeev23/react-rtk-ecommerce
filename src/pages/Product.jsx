import React from 'react';
import styled from 'styled-components';
import Newsletter from "../components/Newsletter";
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 50px;
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

const FilterColor = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => props.color};
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
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
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



export const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Man's denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laboriosam, quae! Architecto dolor facilis itaque labore repellat. Accusamus aliquid commodi enim iure labore mollitia nihil, nulla porro reiciendis veritatis vero.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="#232323" />
                            <FilterColor color="#BACDD4" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};
