import { useEffect, useState } from "react"
import { StyledHeader1} from "./styledheader"
import { easyFetch } from "../utils/store";
import { IndividualNote } from "./individualnote";
import { createNote, deleteFunction } from "../utils/extraFetchFunctions";
import { fetchOptions } from "../utils/fetchOptions";
import EditFormikForm from "./editformikform";
import CreateFormikForm from "./createformikform";
import { StyledParagraph } from "./styledparagraph";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { StyledButton } from "./styledbutton";
import Modal from "./Modal";
import { FaFilter, FaStickyNote } from 'react-icons/fa';


const HighlightedUsername = styled.span`
  color: #FF69B4;
`;

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [refresh, setRefresh] = useState(false);
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState("");
  const [filterNotes, setFilterNotes] = useState([]);
  const [archived, setArchived] = useState(false);
  const [unarchived, setUnarchived] = useState(false);

  const noteBody = {
    title: "Random Note",
    content: "Testing creation of note",
    user_id: user.id
  }

  function handleRefresh(value){
    setRefresh(value);
  };

  useEffect(() => {
    const options = fetchOptions.getOption;
    easyFetch("notes", options).then((data) => {
      data = data.sort(function(a, b) {
        return a.id - b.id;
    });
      setNotes(data);
      setFilterNotes(data);
    });
  }, [refresh])

  useEffect(() => {
    const options = fetchOptions.getOption;
    easyFetch("users", options).then((data) => {
      setUser(data[0]);
    });
  }, [])
  
  useEffect(() => {
    if (archived) {
      const filteredNotes = notes.filter((note) => note.archived === true);
      setFilterNotes(filteredNotes);
    } else {
      setFilterNotes(notes); // Reset filterNotes to all notes
    }
  }, [archived, notes]);

  useEffect(() => {
    if (unarchived) {
      const filteredNotes = notes.filter((note) => note.archived === false);
      setFilterNotes(filteredNotes);
    } else {
      setFilterNotes(notes); // Reset filterNotes to all notes
    }
  }, [unarchived, notes]);

  return(
    <>
    <Modal open={isOpen} handleOpen={setIsOpen} user_id={user.id} onRefresh={handleRefresh} refreshValue={refresh}/>
    <StyledHeader1>My notes</StyledHeader1>
    <StyledParagraph key={user.id}>Welcome <HighlightedUsername>{user.username}</HighlightedUsername>!</StyledParagraph>
    <StyledButton onClick={()=>{setArchived(!archived)}}>Archived notes<FaFilter/></StyledButton>
    <StyledButton onClick={()=>{setUnarchived(!unarchived)}}>Unarchived notes<FaFilter/></StyledButton>
    <StyledButton onClick={()=>{setIsOpen(true)}}>Create Note<FaStickyNote/></StyledButton>

     {filterNotes.map((note) => 
     (
      <>
      <EditFormikForm note_id={note.id} onRefresh={handleRefresh} refreshValue={refresh}></EditFormikForm>
      <IndividualNote key={note.id} uniqueKey={note.id} title={note.title} content={note.content} updated_at={note.updated_at}
      deleteFunction={deleteFunction} refreshFunction={handleRefresh} refreshValue={refresh} archived={note.archived}
      ></IndividualNote>
      </>
     )
      )}
      
    </>
  )
}