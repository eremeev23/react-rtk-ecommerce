import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from "react-redux";
import {closeAnnouncement} from "../store/reducers/announcementSlice"

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
  
  &.hidden {
    display: none;
  }
`
const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 3px;
  cursor: pointer;
`

const Announcement = () => {
  const { announcement } = useSelector(state => state.announcement)
  const dispatch = useDispatch();

  const close = () => dispatch(closeAnnouncement())

  return (
    <Container className={announcement ? null : "hidden"}>
      Super Deal! Free shipping in November for Saint-Petersburg.
      <CloseButton onClick={close}>
        <CancelIcon/>
      </CloseButton>
    </Container>
  )
}
export default Announcement