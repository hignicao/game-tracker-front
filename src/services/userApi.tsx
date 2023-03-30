import api from './api';

export async function signUp(name: string, username: string, email: string, password: string) {
  const response = await api.post('/users', { name, username, email, password });
  return response.data;
}
