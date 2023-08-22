import { formatDate } from "../../utils/format"
import { StyledHeader2 } from "../styledheader"
import { StyledParagraph } from "../styledparagraph"
import { FaBeer } from 'react-icons/fa';

export function IndividualNote({uniqueKey, title, content, updated_at, deleteFunction, refreshFunction}){
  return(
    
    <div className="note-item" id={uniqueKey}>
      <StyledHeader2>{title}</StyledHeader2>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>Last edited: {formatDate(updated_at)}</StyledParagraph>
      <FaBeer onClick={() => {
            deleteFunction(uniqueKey); 
            refreshFunction(true); 
          }}>
      </FaBeer>
    </div>
    
  )
}