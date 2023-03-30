import api from './api';

export async function signIn(username: string, password: string) {
  const response = await api.post('/auth/sign-in', { username, password });
  return response.data;
}