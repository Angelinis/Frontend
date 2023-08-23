import { useEffect, useState } from "react"
import { StyledHeader1} from "./styledheader"
import { easyFetch } from "../utils/store";
import { IndividualNote } from "./individualnote";
import { createNote, deleteFunction } from "../utils/extraFetchFunctions";
import { fetchOptions } from "../utils/fetchOptions";
import EditFormikForm from "./editformikform";
import CreateFormikForm from "./createformikform";



export const Home = () => {
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
    console.log("here!!")
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
    <p onClick={()=>{setArchived(!archived)}}>Archived Notes</p>
    <p onClick={()=>{setUnarchived(!unarchived)}}>Unarchived Notes</p>
    <p onClick={()=>{createNote(noteBody, handleRefresh, refresh)}}>Create Notes</p>
    <CreateFormikForm user_id={user.id} onRefresh={handleRefresh} refreshValue={refresh} ></CreateFormikForm>

    <StyledHeader1>My notes</StyledHeader1>
    <p key={user.id}>Welcome {user.username}</p>
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