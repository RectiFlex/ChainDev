export const APP_CONFIG = {
  APP_NAME: 'SmartAI',
  APP_VERSION: '1.0.0',
  SUPPORTED_CHAINS: ['ethereum', 'polygon', 'bsc'] as const,
  DEFAULT_CHAIN: 'ethereum',
  API_TIMEOUT: 10000,
  MAX_RETRIES: 3,
  CHAIN_IDS: {
    ethereum: 1,
    polygon: 137,
    bsc: 56,
  },
} as const;

export const SUPPORTED_WALLETS = {
  METAMASK: 'MetaMask',
  WALLET_CONNECT: 'WalletConnect',
} as const;