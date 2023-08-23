export async function easyFetch(enpoint, options){
  const BASE_URI = import.meta.env.VITE_DOMAIN;
  try{
      const response = await fetch(BASE_URI+enpoint, options);
      return await response.json();
  } catch(error){
      // console.log(error);
      return {errors: error};
  }
}