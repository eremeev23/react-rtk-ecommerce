import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const Container = styled.div`
  position: relative;
  padding: 20px 10px;
  height: fit-content;
  background-color: #fff;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: rgba(0, 128, 128, 0.4);
    //background-color: #f1f1f1;
  }
`

const Image = styled.img`
  height: auto;
  width: 100%;
  z-index: 2;
`

const Name = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 9px 0 2px;
`

const Price = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 4px;
`

const Colors = styled.div`
  display: flex;
`

const Color = styled.input`
  position: relative;
  margin: 10px 20px 0 0;
  width: 0;
  height: 0;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: ${props => props.color};
`

const Product = ({item}) => {
    return (
        <Container>
          <Link to={`${item.id}`}>
            <Image src={item.img}/>
          </Link>

          <Name>
            <Link to={`${item.id}`}>
              {item.name}
            </Link>
          </Name>
          <Price>{item.price} $ </Price>
          <Colors>
            {item.colors.map((elem, id) => {
              return (
                <Color type="radio" name="color" id={id} value={elem} color={elem} key={id} />
              )
            })}
          </Colors>
        </Container>
    );
};

export default Product;
