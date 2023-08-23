import { easyFetch } from "./store";
import { fetchOptions } from "./fetchOptions";

export function deleteFunction(id){
  const config = fetchOptions.destroyOption

  easyFetch(`notes/${id}`, config)
    .then((response) => {response})
    .catch((error) => {
      console.error('Error:', error);
  });

  console.log("Succesfully deleted product");
}

const headers = {
  'Content-Type': 'application/json'
}

export function createNote(body, refresh, refreshValue){
  const config = {
     method: "POST" ,
     headers,
     body: JSON.stringify(body)
  }

  easyFetch(`notes`, config)
    .then((response) => {response})
    .catch((error) => {
      console.error('Error:', error);
  });

  console.log("Succesfully created note");

  setTimeout(() => {
      refresh(!refreshValue);
  }, 200); 
}


export function editNote(body, refresh, id, refreshValue){
  const config = {
     method: "PATCH" ,
     headers,
     body: JSON.stringify(body)
  }

  easyFetch(`notes/${id}`, config)
    .then((response) => {response})
    .catch((error) => {
      console.error('Error:', error);
  });

  console.log("Succesfully edited note");

  setTimeout(() => {
      refresh(!refreshValue);
  }, 200); 
}

