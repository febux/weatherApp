export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'
const API_KEY = process.env.REACT_APP_GEO_API_KEY;

export const geoApiOptions = (namePrefix) => {
  return {
    method: 'GET',
    url: GEO_API_URL,
    params: {namePrefix: namePrefix},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };
};
