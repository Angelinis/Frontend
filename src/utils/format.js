export function formatDate(date){
  const inputDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);
  
  return(formattedDate);
}