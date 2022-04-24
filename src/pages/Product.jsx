import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Newsletter from "../components/Newsletter";
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {useDispatch, useSelector} from "react-redux";
import {addItem, countBill} from "../store/reducers/cartSlice";

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
  border-bottom: 2px solid #393939;
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
  min-width: 120px;
  padding: 10px 15px;
  color: #232323;
  border: 2px solid #232323;
  background-color: transparent;
  font-weight: 600;
  transition: background-color .2s ease-in-out, color .3s ease-in-out;

  &:hover {
    background-color: #232323;
    color: #fff;
  }

  &:active {
    background-color: #232323;
  }
`

const ButtonLink = styled.button`
  cursor: pointer;
  min-width: 120px;
  padding: 10px 15px;
  border: 2px solid teal;
  background-color: teal;
  transition: background-color .2s ease-in-out, color .3s ease-in-out;

  a {
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    background-color: #fff;

    a {
      color: #232323;
    }
  }
`

export const Product = ({match}) => {
  let params = useParams();
  let location = useLocation();

  const dispatch = useDispatch();
  const category = location.pathname.split('/')[1];
  const product = useSelector(state => Object.values(Object.entries(state).filter(item => item[0] === category)[0][1])[0].filter(elem => elem.id == params.id)[0]);
  const cartItems = useSelector(state => state.cart.cartItems)
  const [num, setNum] = useState(1);
  const [added, setAdded] = useState(false);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  let order = {};

  const addToCart = order => dispatch(addItem(order));
  const count = order => dispatch(countBill(order))

  const addProduct = e => {
    e.preventDefault()

    order = {
      amount: num,
      id: product.id,
      img: product.img,
      name: product.name,
      price: Number(product.price * num),
      color,
      category,
      size,
    };

    addToCart(order)
    count(order)
    setAdded(true)
  }

  const numHandler = action => {
    if (action === "plus") {
      num < 10 ? setNum(num + 1) : setNum(10)
    } else {
      num > 1 ? setNum(num - 1) : setNum(1)
    }
  }

  function isInCart() {
    if (cartItems.filter(item => item.name === product.name).length || added) {
      return <ButtonLink><Link to={'/cart'}>GO TO CART</Link></ButtonLink>
    } else {
      return <Button onClick={addProduct}>ADD TO CART</Button>
    }
  }

  function areSizes() {
    if (product.sizes.length) {
      return (
        <Filter>

          <FilterTitle>Size</FilterTitle>
          <FilterSize onChange={e => setSize(e.target.value)}>
            { product.sizes.map((item, id) => (
              <FilterSizeOption value={item} key={id} defaultValue={size}>
                {item}
              </FilterSizeOption>
            ))}
          </FilterSize>
        </Filter>
      )
    }
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
                  <FilterColor
                    onChange={e => setColor(e.target.value)}
                    type="radio"
                    name="color"
                    id={id}
                    value={item}
                    color={item}
                    key={id}
                    checked={item === color}
                  />
                ))}
              </Filter>
              {areSizes()}
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => numHandler("minus")} style={{cursor: "pointer"}}/>
                <Amount>{num}</Amount>
                <Add onClick={() => numHandler("plus")} style={{cursor: "pointer"}}/>
              </AmountContainer>
              {isInCart()}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </ContentWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
