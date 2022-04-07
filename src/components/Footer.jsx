import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/MailOutline';

const Container = styled.footer`
  margin-top: 5px;
  display: flex;
  background-color: #f5fbfc;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h2``

const Desc = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.color};
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
`

const Right = styled.div`
  flex: 1;
  padding: 20px 0;
`

const ContactItem = styled.a`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    El modo.
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quae sint veritatis.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999" href="#">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="e1306c" href="#">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55acee" href="#">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="e60020" href="#">
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man's Fashion</ListItem>
                    <ListItem>Woman's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem href="https://maps.google.com/?ll=59.927563,30.360613" target="_blank" >
                    <PlaceIcon style={{marginRight: "10px"}}/> Lorem ipsum dolor sit amet.
                </ContactItem>
                <ContactItem href="tel:89995554433">
                    <PhoneIcon style={{marginRight: "10px"}}/> +7 999 555 44 33
                </ContactItem>
                <ContactItem href="mailto:contact@mail.com">
                    <AlternateEmailIcon style={{marginRight: "10px"}}/> contact@mail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;