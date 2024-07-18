const API_KEY = process.env.REACT_APP_GEO_API_KEY;

export const geoApiOptions = (namePrefix) => {
  return {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {namePrefix: namePrefix},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };
};
