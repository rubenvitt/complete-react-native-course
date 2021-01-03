import axios from './tracker.axios-config';

export const postSignup = async (data: { user: string; password: string }) => {
  return await axios
    .post('/signup', {
      email: data.user,
      password: data.password,
    })
    .catch((reason) => {
      console.error(reason);
      throw new Error('Something went wrong');
    });
};

export const postSignin = async (data: { user: string; password: string }) => {
  return await axios
    .post('/signin', {
      email: data.user,
      password: data.password,
    })
    .catch((reason) => {
      console.error(reason);
      throw new Error('Something went wrong');
    });
};
