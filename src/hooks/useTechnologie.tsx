import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/technologies`);
  const json = await result.json();
  
  return json;
}

export function useTechnology() {
  return useQuery(["technologies"], fetchData);
}
 