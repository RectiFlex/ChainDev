import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().default('http://localhost:3000'),
  VITE_ETHEREUM_RPC_URL: z.string().url().default('https://mainnet.infura.io/v3/your-project-id'),
  VITE_POLYGON_RPC_URL: z.string().url().default('https://polygon-rpc.com'),
  VITE_BSC_RPC_URL: z.string().url().default('https://bsc-dataseed.binance.org'),
  VITE_JWT_SECRET: z.string().min(1).default('development-secret-key'),
});

type EnvConfig = z.infer<typeof envSchema>;

const getEnvConfig = (): EnvConfig => {
  try {
    return envSchema.parse({
      VITE_API_URL: import.meta.env.VITE_API_URL,
      VITE_ETHEREUM_RPC_URL: import.meta.env.VITE_ETHEREUM_RPC_URL,
      VITE_POLYGON_RPC_URL: import.meta.env.VITE_POLYGON_RPC_URL,
      VITE_BSC_RPC_URL: import.meta.env.VITE_BSC_RPC_URL,
      VITE_JWT_SECRET: import.meta.env.VITE_JWT_SECRET,
    });
  } catch (error) {
    console.error('Environment validation failed:', error);
    // Use default values in development
    if (import.meta.env.DEV) {
      return envSchema.parse({});
    }
    throw new Error('Invalid environment configuration');
  }
};

const env = getEnvConfig();

export const config = {
  api: {
    baseUrl: env.VITE_API_URL,
    timeout: 10000,
    retries: 3,
  },
  ethereum: {
    rpcUrl: env.VITE_ETHEREUM_RPC_URL,
    chainId: 1,
  },
  polygon: {
    rpcUrl: env.VITE_POLYGON_RPC_URL,
    chainId: 137,
  },
  bsc: {
    rpcUrl: env.VITE_BSC_RPC_URL,
    chainId: 56,
  },
  jwt: {
    secret: env.VITE_JWT_SECRET,
  },
} as const;

export const validateEnv = () => {
  getEnvConfig();
};