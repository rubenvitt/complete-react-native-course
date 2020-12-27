import axios from './tracker.api';

export const postSignup = async (data: { user: string; password: string }) => {
  console.log('data is', data);
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
