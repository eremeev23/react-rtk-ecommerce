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

export const ProductList = ({match}) => {
    const navigate = useNavigate();
    let params = useParams();
    const title = useSelector(state => Object.values(Object.entries(state).filter(item => item[0] === params.id)[0][0]).join('')).toUpperCase();
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
            <Products items={products}/>
            <Newsletter />
            <Footer/>
        </Container>
    );
};