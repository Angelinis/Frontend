import { useEffect, useState } from "react"
import { StyledHeader1} from "./styledheader"
import { easyFetch } from "../utils/store";
import { IndividualNote } from "./individualnote";
import { deleteFunction } from "../utils/extraFetchFunctions";
import { fetchOptions } from "../utils/fetchOptions";
import EditFormikForm from "./editformikform";
import { StyledParagraph } from "./styledparagraph";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { StyledButton } from "./styledbutton";
import { FaFilter, FaStickyNote } from 'react-icons/fa';
import { ModalCreate, ModalEdit } from "./Modal";

const HighlightedUsername = styled.span`
  color: #FF69B4;
`;

export const Home = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [noteId, setNoteId] = useState(null);


  const [refresh, setRefresh] = useState(false);
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState("");
  const [filterNotes, setFilterNotes] = useState([]);
  const [archived, setArchived] = useState(false);
  const [unarchived, setUnarchived] = useState(false);


  function handleRefresh(value){
    setRefresh(value);
  };

  function handleOpenEdit(value){
    setIsOpenEdit(value);
  };

  function handleNoteEdit(value){
    setNoteId(value);
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
    <ModalCreate open={isOpenCreate} handleOpen={setIsOpenCreate} user_id={user.id} onRefresh={handleRefresh} refreshValue={refresh}/>
    <ModalEdit open={isOpenEdit} handleOpen={setIsOpenEdit} note_id={noteId} onRefresh={handleRefresh} refreshValue={refresh}/>
    <StyledHeader1>My notes</StyledHeader1>
    <StyledParagraph key={user.id}>Welcome <HighlightedUsername>{user.username}</HighlightedUsername>!</StyledParagraph>
    <StyledButton onClick={()=>{setArchived(!archived)}}>Archived notes<FaFilter/></StyledButton>
    <StyledButton onClick={()=>{setUnarchived(!unarchived)}}>Unarchived notes<FaFilter/></StyledButton>
    <StyledButton onClick={()=>{setIsOpenCreate(true)}}>Create Note<FaStickyNote/></StyledButton>

     {filterNotes.map((note) => 
     (
      <IndividualNote key={note.id} uniqueKey={note.id} title={note.title} content={note.content} updated_at={note.updated_at}
      deleteFunction={deleteFunction} refreshFunction={handleRefresh} refreshValue={refresh} archived={note.archived}
      handleOpenEdit={handleOpenEdit} handleNoteId={handleNoteEdit}
      ></IndividualNote>
     )
      )}
      
    </>
  )
}