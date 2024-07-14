export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

export const geoApiOptions = (namePrefix) => {
  return {
    method: 'GET',
    url: GEO_API_URL,
    params: {namePrefix: namePrefix},
    headers: {
      'x-rapidapi-key': '4f9c4d5f0cmsh90f72f4c19acf9bp18d782jsnc30c581e4f35',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };
};
