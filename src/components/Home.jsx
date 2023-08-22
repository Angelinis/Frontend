import { useEffect, useState } from "react"
import { StyledHeader1} from "./styledheader"
import { easyFetch } from "../utils/store";
import { IndividualNote } from "./individualnote";
import { editFunction } from "../utils/extraFunctions";
import { fetchOptions } from "../utils/fetchOptions";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState("");
  const [filterNotes, setFilterNotes] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const options = fetchOptions.getOption;
    easyFetch("notes", options).then((data) => {
      setNotes(data);
      setFilterNotes(data);
    });
  }, [])

  useEffect(() => {
    const options = fetchOptions.getOption;
    easyFetch("users", options).then((data) => {
      setUser(data[0]);
    });
  }, [])
  
  useEffect(() => {
    if (filtered) {
      const filteredNotes = notes.filter((note) => note.archived === true);
      setFilterNotes(filteredNotes);
    } else {
      setFilterNotes(notes); // Reset filterNotes to all notes
    }
  }, [filtered, notes]);

  return(
    <>
    <p onClick={()=>{setFiltered(!filtered)}}>Filter them</p>
    <StyledHeader1>My notes</StyledHeader1>
    <p key={user.id}>Welcome {user.username}</p>
     {filterNotes.map((note) => 
     (
      <IndividualNote key={note.id} uniqueKey={note.id} title={note.title} content={note.content} updated_at={note.updated_at}
      editFunction={editFunction}
      ></IndividualNote>
     )
      )}
      
    </>
  )
}