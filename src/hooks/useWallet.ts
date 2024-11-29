import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useCallback } from 'react';
import { APP_CONFIG } from '../utils/constants';

const injected = new InjectedConnector({
  supportedChainIds: Object.values(APP_CONFIG.CHAIN_IDS),
});

export const useWallet = () => {
  const { account, activate, deactivate, active, error, library } = useWeb3React();

  const connect = useCallback(async () => {
    try {
      await activate(injected, undefined, true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  }, [activate]);

  const disconnect = useCallback(() => {
    try {
      deactivate();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      throw error;
    }
  }, [deactivate]);

  return {
    account,
    active,
    error,
    library,
    connect,
    disconnect,
  };
};