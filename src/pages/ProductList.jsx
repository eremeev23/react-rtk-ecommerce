import React from 'react';
import styled from 'styled-components';
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useSelector } from "react-redux";

const Container = styled.div`
`

const HomeBtn = styled.button`
    margin-top: 15px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
    border: none;
  background-color: transparent;

    svg {
        margin-right: 7px;
    }
`

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
    const navigate = useNavigate();
    let params = useParams();
    const title = useSelector(state => Object.values(Object.entries(state).filter(item => item[0] === params.id)[0][0]).join(''));
    const products = useSelector(state => Object.values(Object.entries(state).filter(item => item[0] === params.id)[0][1]));

    return (
        <Container>
            <Announcement />
            <Navbar/>
            <HomeBtn  onClick={() => navigate(-1)}>
                <KeyboardBackspaceIcon />
                Home
            </HomeBtn>
            <Title>{ title }</Title>
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