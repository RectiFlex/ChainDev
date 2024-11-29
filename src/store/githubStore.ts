import { create } from 'zustand';
import { Octokit } from '@octokit/rest';

interface GitHubState {
  isConnected: boolean;
  octokit: Octokit | null;
  repositories: Array<{
    name: string;
    full_name: string;
    description: string;
    url: string;
  }>;
  connect: (token: string) => void;
  disconnect: () => void;
  fetchRepositories: () => Promise<void>;
}

export const useGitHubStore = create<GitHubState>()((set, get) => ({
  isConnected: false,
  octokit: null,
  repositories: [],
  connect: (token) => {
    const octokit = new Octokit({ auth: token });
    set({ octokit, isConnected: true });
    get().fetchRepositories();
  },
  disconnect: () => {
    set({ octokit: null, isConnected: false, repositories: [] });
  },
  fetchRepositories: async () => {
    const { octokit } = get();
    if (!octokit) return;

    try {
      const { data } = await octokit.repos.listForAuthenticatedUser({
        sort: 'updated',
        per_page: 10,
      });

      set({
        repositories: data.map(repo => ({
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description || '',
          url: repo.html_url,
        })),
      });
    } catch (error) {
      console.error('Failed to fetch repositories:', error);
    }
  },
}));