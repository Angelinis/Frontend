import { StyledHeader2 } from "../styledheader"
import { StyledParagraph } from "../styledparagraph"
import { StyledFlexbox } from "../styledflexbox";


import { formatDate } from "../../utils/format"
import { editNote } from "../../utils/extraFetchFunctions";

import { FaTrashAlt, FaArchive, FaEdit, FaUpload } from 'react-icons/fa';
import styled from "@emotion/styled";


const StyledDiv = styled.div`
border-style: solid;
width: 300px;
margin-top: 1.20rem;
margin-bottom: 1.375rem;
margin-left:auto;
margin-right:auto;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
border-radius: 5px;
`

export function IndividualNote({uniqueKey, title, content, archived, updated_at, 
  deleteFunction, refreshFunction, refreshValue, handleOpenEdit, handleNoteId}){
  const handleDelete = async () => {
    await deleteFunction(uniqueKey);
    setTimeout(() => {
      refreshFunction(!refreshValue);
    }, 400); 
  };

  const body = {
    archived: !archived
  }
  
  const handleEditModal = () => {
    handleOpenEdit(true);
    handleNoteId(uniqueKey);
  };

  const handleArchived = async () => {
    await editNote(body, refreshFunction, uniqueKey, refreshValue );
  };
  return(
    
    <StyledDiv className="note-item" id={uniqueKey}>
      <StyledHeader2>{title}</StyledHeader2>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>Last edited: {formatDate(updated_at)}</StyledParagraph>
      <StyledFlexbox >
      <FaTrashAlt style={{ cursor: "pointer" }} onClick={handleDelete}>
      </FaTrashAlt>
      {archived ? <FaUpload style={{ cursor: "pointer" }} onClick={handleArchived}></FaUpload> : 
       <FaArchive style={{ cursor: "pointer" }} onClick={handleArchived}/>}
      <FaEdit style={{ cursor: "pointer" } } onClick={handleEditModal}></FaEdit>
      </StyledFlexbox>
    </StyledDiv>
    
  )
}