import { easyFetch } from "./store";
import { fetchOptions } from "./fetchOptions";

export function editFunction(id){
  easyFetch(`notes/${id}`, {method: "DELETE"}).then((u) => u).then((u)=>u).catch((e)=> e)
};