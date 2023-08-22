export async function easyFetch(enpoint, options){
  const BASE_URI = "https://backend-e9fx.onrender.com/";
  try{
      const response = await fetch(BASE_URI+enpoint, options);
      return await response.json();
  } catch(error){
      console.log(error);
      return {errors: error};
  }
}