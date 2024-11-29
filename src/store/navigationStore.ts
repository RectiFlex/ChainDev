import { create } from 'zustand';
import { ActivePage } from '../types/navigation';

interface NavigationState {
  activePage: ActivePage;
  activeSubPage?: string;
  setActivePage: (page: ActivePage, subPage?: string) => void;
}

export const useNavigationStore = create<NavigationState>()((set) => ({
  activePage: 'editor',
  activeSubPage: undefined,
  setActivePage: (page, subPage) => set({ activePage: page, activeSubPage: subPage }),
}));