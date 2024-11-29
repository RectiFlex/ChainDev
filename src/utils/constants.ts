export const APP_CONFIG = {
  APP_NAME: 'SmartAI',
  APP_VERSION: '1.0.0',
  SUPPORTED_CHAINS: ['ethereum', 'polygon', 'bsc'] as const,
  DEFAULT_CHAIN: 'ethereum',
  API_TIMEOUT: 10000,
  MAX_RETRIES: 3,
} as const;