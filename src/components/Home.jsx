import { useEffect, useState } from "react"
import { StyledHeader1, StyledHeader2 } from "./styledheader"
import { easyFetch } from "../utils/store";
import { StyledParagraph } from "./styledparagraph";
import { IndividualNote } from "./individualnote";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    const options = {method: "GET"};
    easyFetch("notes", options).then((data) => {
      setNotes(data);
    });
  }, [])

  useEffect(() => {
    const options = {method: "GET"};
    easyFetch("users", options).then((data) => {
      setUser(data[0]);
    });
  }, [])
  
  return(
    <>
    <StyledHeader1>My notes</StyledHeader1>
    <p key={user.id}>Welcome {user.username}</p>
     {notes.map((note) => 
     (
      <IndividualNote key={note.id} uniqueKey={note.id} title={note.title} content={note.content} updated_at={note.updated_at}></IndividualNote>
     )
      )}
      
    </>
  )
}