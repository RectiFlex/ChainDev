import { apiClient } from '../client';
import { z } from 'zod';

const contractSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  network: z.enum(['ethereum', 'polygon', 'bsc']),
  compiler: z.string(),
});

export const contractsApi = {
  create: async (contract: z.infer<typeof contractSchema>) => {
    const validated = contractSchema.parse(contract);
    const { data } = await apiClient.post('/contracts', validated);
    return data;
  },

  compile: async (id: string) => {
    const { data } = await apiClient.post(`/contracts/${id}/compile`);
    return data;
  },

  deploy: async (id: string, args: unknown[]) => {
    const { data } = await apiClient.post(`/contracts/${id}/deploy`, { args });
    return data;
  },

  list: async () => {
    const { data } = await apiClient.get('/contracts');
    return data;
  },
};