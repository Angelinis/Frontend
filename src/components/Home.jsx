import { useEffect, useState } from "react"
import { StyledHeader } from "./styledheader"
import { easyFetch } from "../utils/store";


export const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const options = {method: "GET"};
    easyFetch("notes", options).then((data) => {
      setNotes(data);
    });
  }, [])
  
  return(
    <>
    <StyledHeader>My notes</StyledHeader>
    <p>
     {notes.map((n) => {
          return `${n.title} `;
        })}
    </p>
    </>
  )
}