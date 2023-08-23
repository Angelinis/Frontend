import { formatDate } from "../../utils/format"
import { StyledHeader2 } from "../styledheader"
import { StyledParagraph } from "../styledparagraph"
import { FaBeer } from 'react-icons/fa';

export function IndividualNote({uniqueKey, title, content, updated_at, deleteFunction, refreshFunction, refreshValue}){
  const handleDelete = async () => {
    await deleteFunction(uniqueKey);
    setTimeout(() => {
      refreshFunction(!refreshValue);
    }, 200); 
  };
  return(
    
    <div className="note-item" id={uniqueKey}>
      <StyledHeader2>{title}</StyledHeader2>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>Last edited: {formatDate(updated_at)}</StyledParagraph>
      <FaBeer onClick={handleDelete}>
      </FaBeer>
    </div>
    
  )
}