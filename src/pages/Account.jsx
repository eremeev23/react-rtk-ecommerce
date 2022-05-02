import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Container = styled.div`
	
`

export const Account = () => {
	const user = useSelector(state => state.user.logedUser)

  return (
    <Container>
			<Navbar />
			<main>
				<p>{user.name}</p>
				<p>{user.email}</p> 
			</main>
			<Footer />
    </Container>
  )
}
