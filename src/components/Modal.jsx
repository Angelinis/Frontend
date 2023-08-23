import React from 'react'
import ReactDOM from 'react-dom'
import { StyledButton } from "./styledbutton";
import CreateFormikForm from './createformikform';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import EditFormikForm from './editformikform';

const MODAL_STYLES = {
  width: "550px",
  height: "450px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#efefed",
  padding: "32px 19.5px",
  borderRadius: "20px",
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000
}

const StyledDiv = styled.div`
display: flex;
margin-right: auto;
margin-left:auto;
width: 400px;
justify-content: center;
`


const modalRoot = document.getElementById("modal-root");

export function ModalCreate({open, handleOpen, user_id, onRefresh, refreshValue
}){
  if (!open) return null;
  return( 
    ReactDOM.createPortal(
      <>
  <div style={OVERLAY_STYLES}>
  <div style={MODAL_STYLES}>
    <CreateFormikForm user_id={user_id} onRefresh={onRefresh} refreshValue={refreshValue} handleOpen={handleOpen}
    open={open}
    ></CreateFormikForm>
    

    
    <StyledDiv>
    <StyledButton onClick={() => handleOpen(!open)}>No, cancel!</StyledButton>
    </StyledDiv>
  </div>
  </div>
  </>, modalRoot 
  )
  )
}

export function ModalEdit({open, handleOpen, onRefresh, refreshValue, note_id}){
  if (!open) return null;
  return( 
    ReactDOM.createPortal(
      <>
  <div style={OVERLAY_STYLES}>
  <div style={MODAL_STYLES}>
  <EditFormikForm note_id={note_id} onRefresh={onRefresh} refreshValue={refreshValue} handleOpen={handleOpen}
    open={open}></EditFormikForm>
    

    
    <StyledDiv>
    <StyledButton onClick={() => handleOpen(!open)}>No, cancel!</StyledButton>
    </StyledDiv>
  </div>
  </div>
  </>, modalRoot 
  )
  )
}

