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

export async function createNote(body, refresh, refreshValue) {
  const config = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };

  try {
    const response = await easyFetch(`notes`, config);
    console.log("Successfully created note:", response);
    refresh(!refreshValue);
  } catch (error) {
    console.error('Error:', error);
  }
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

