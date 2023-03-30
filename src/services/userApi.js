import api from './api';

export async function signUp(name, username, email, password) {
  const response = await api.post('/users', { name, username, email, password });
  return response.data;
}
