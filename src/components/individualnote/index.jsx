import { formatDate } from "../../utils/format"
import { StyledHeader2 } from "../styledheader"
import { StyledParagraph } from "../styledparagraph"
import { FaTrashAlt, FaArchive, FaEdit, FaUpload } from 'react-icons/fa';
import { editNote } from "../../utils/extraFetchFunctions";

export function IndividualNote({uniqueKey, title, content, archived, updated_at, 
  deleteFunction, refreshFunction, refreshValue}){
  const handleDelete = async () => {
    await deleteFunction(uniqueKey);
    setTimeout(() => {
      refreshFunction(!refreshValue);
    }, 200); 
  };

  const body = {
    archived: !archived
  }
  
  const handleArchived = async () => {
    await editNote(body, refreshFunction, uniqueKey, refreshValue );
  };
  return(
    
    <div className="note-item" id={uniqueKey}>
      <StyledHeader2>{title}</StyledHeader2>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>Last edited: {formatDate(updated_at)}</StyledParagraph>
      <FaTrashAlt onClick={handleDelete}>
      </FaTrashAlt>
      {archived ? <FaUpload onClick={handleArchived}></FaUpload> :  <FaArchive onClick={handleArchived}/>}
      <FaEdit></FaEdit>
    </div>
    
  )
}