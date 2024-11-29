import { apiClient } from '../client';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2),
});

export const authApi = {
  login: async (credentials: z.infer<typeof loginSchema>) => {
    const validated = loginSchema.parse(credentials);
    const { data } = await apiClient.post('/auth/login', validated);
    return data;
  },

  register: async (userData: z.infer<typeof registerSchema>) => {
    const validated = registerSchema.parse(userData);
    const { data } = await apiClient.post('/auth/register', validated);
    return data;
  },

  logout: async () => {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('auth_token');
  },
};