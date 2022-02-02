import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`);
  const json = await result.json();
  
  return json;
}

export function useCivilisations() {
  return useQuery(["civilizations"], fetchData);
}
 