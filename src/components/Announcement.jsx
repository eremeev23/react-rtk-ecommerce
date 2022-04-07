import React from 'react'
import styled from 'styled-components'
import CancelIcon from '@material-ui/icons/Cancel';

const Container = styled.div`
  position: relative;
  height: 30px;
  font-size: 14px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
`
const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 3px;
  cursor: pointer;
`

const Announcement = () => {

  const closeAnnouncement = () => {
    const announcement = document.querySelector('.announcement')
    announcement.style = 'display: none';
  }

  return (
    <Container className='announcement'>
      Super Deal! Free shipping in November for Saint-Petersburg.
      <CloseButton onClick={closeAnnouncement}>
        <CancelIcon />
      </CloseButton>
    </Container>
  )
}
export default Announcement