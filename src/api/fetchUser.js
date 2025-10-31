import { ERROR } from '../redux/constants';

const fetchUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (response.status === ERROR.NOT_FOUND) {
    throw new Error('User not found');
  }
  const data = await response.json();
  return data;
};

export default fetchUser;
