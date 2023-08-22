export async function easyFetch(enpoint, options){
  const BASE_URI = "https://backend-e9fx.onrender.com/";
  const BASE_URI2 = "http://localhost:3000/"
  try{
      const response = await fetch(BASE_URI2+enpoint, options);
      return await response.json();
  } catch(error){
      console.log(error);
      return {errors: error};
  }
}