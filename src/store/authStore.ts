import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  walletAddress?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  connectWallet: (address: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      signIn: async (email, password) => {
        // Simulate API call
        const user = { id: '1', email };
        set({ user, isAuthenticated: true });
      },
      signUp: async (email, password) => {
        // Simulate API call
        const user = { id: '1', email };
        set({ user, isAuthenticated: true });
      },
      connectWallet: async (address) => {
        set((state) => ({
          user: state.user ? { ...state.user, walletAddress: address } : null,
        }));
      },
      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);