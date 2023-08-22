import { easyFetch } from "./store";
import { fetchOptions } from "./fetchOptions";

export function editFunction(id){
  const options = {
    method: 'DELETE'}

  easyFetch(`notes/${id}`, options)
    .then((response) => {response})
    .catch((error) => {
      console.error('Error:', error);
    });

}