import axios from 'axios';

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer dKFTdFQnVQzh_e_FMSuKUKlFXKYxiiTS8YsuMtMjhOET83c-qr9dImjomQZLrw9oUDzLf3R_xZlyDcQhNdwG2xG_h5PB3J7-IDI7jr6XYuV5kQ0faVftjgoto1zgX3Yx',
  },
});

export const searchBusiness = async (term, location) => {
  if (location === '') {
    return [];
  }

  try {
    const { data } = await yelp.get('/search', {
      params: {
        term: term,
        location: location,
        limit: 50,
      },
    });
    return data.businesses;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getSingleBusiness = async (id) => {
  if (id === undefined || id === '') {
    throw new Error("ID can't be empty");
  }

  try {
    const { data } = await yelp.get(`/${id}`, {
      params: {},
    });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
