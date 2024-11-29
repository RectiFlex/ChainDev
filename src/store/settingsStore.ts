import { create } from 'zustand';
import { SettingsTab } from '../types/settings';

interface SettingsState {
  activeTab: SettingsTab;
  setActiveTab: (tab: SettingsTab) => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  activeTab: 'general',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));