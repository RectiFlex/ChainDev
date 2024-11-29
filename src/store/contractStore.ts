import { create } from 'zustand';
import { SmartContract } from '../types/contract';

interface ContractState {
  contracts: SmartContract[];
  activeContract: SmartContract | null;
  setActiveContract: (contract: SmartContract | null) => void;
  addContract: (contract: SmartContract) => void;
}

export const useContractStore = create<ContractState>()((set) => ({
  contracts: [],
  activeContract: null,
  setActiveContract: (contract) => set({ activeContract: contract }),
  addContract: (contract) => 
    set((state) => ({ contracts: [...state.contracts, contract] })),
}));