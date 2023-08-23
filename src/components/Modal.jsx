import React from 'react'
import ReactDOM from 'react-dom'
import { StyledButton } from "./styledbutton";

const MODAL_STYLES = {
  width: "301px",
  height: "218px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#D1D5DB",
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

const modalRoot = document.getElementById("modal-root");

export default function Modal({open, id, children, handleOpen, handleAction, onProductChange}){
  if (!open) return null;
  return( 
    ReactDOM.createPortal(
      <>
  <div style={OVERLAY_STYLES}>
  <div style={MODAL_STYLES}>
    <StyledButton onClick={() => handleOpen(!open)}>No, cancel!</StyledButton>
  </div>
  </div>
  </>, modalRoot 
  )
  )
}