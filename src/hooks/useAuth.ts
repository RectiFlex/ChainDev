import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import { authApi } from '../api/endpoints/auth';

export const useAuth = () => {
  const { signIn: storeSignIn, signOut: storeSignOut } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      localStorage.setItem('auth_token', response.token);
      storeSignIn(response.user);
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }, [storeSignIn]);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
      storeSignOut();
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }, [storeSignOut]);

  return { login, logout };
};