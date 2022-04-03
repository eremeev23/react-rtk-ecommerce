import React from 'react';
import styled from 'styled-components';
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { categories } from '../data'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 15px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #393939;
`

const Option = styled.option`
  cursor: pointer;
  font-size: 16px;
`

export const ProductList = ({match}) => {
    let params = useParams();
    const products = categories.find(item => item.slug === params.id)

    return (
        <Container>
            <Announcement />
            <Navbar/>
            <Title>{products.title}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled defaluValue>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled defaluValue>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option defaluValue>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products items={products}/>
            <Newsletter />
            <Footer/>
        </Container>
    );
};