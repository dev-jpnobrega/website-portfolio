import userMock from '../assets/user.json';

export const fetchUserById = ({ id }) => {
  return userMock.data.find(user => user.id === id);
}