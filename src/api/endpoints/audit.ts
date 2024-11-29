import { apiClient } from '../client';
import { z } from 'zod';

const auditRequestSchema = z.object({
  contractId: z.string(),
  configuration: z.object({
    depth: z.number().min(1).max(5),
    includeGas: z.boolean(),
  }).optional(),
});

export const auditApi = {
  requestAudit: async (params: z.infer<typeof auditRequestSchema>) => {
    const validated = auditRequestSchema.parse(params);
    const { data } = await apiClient.post('/audit/request', validated);
    return data;
  },

  getStatus: async (auditId: string) => {
    const { data } = await apiClient.get(`/audit/${auditId}/status`);
    return data;
  },

  getReport: async (auditId: string) => {
    const { data } = await apiClient.get(`/audit/${auditId}/report`);
    return data;
  },
};