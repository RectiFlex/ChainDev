import { useQuery, useMutation } from '@tanstack/react-query';
import { auditApi } from '../api/endpoints/audit';

export const useAudit = (contractId?: string) => {
  const { mutateAsync: requestAudit } = useMutation({
    mutationFn: auditApi.requestAudit,
  });

  const { data: auditStatus, isLoading: isLoadingStatus } = useQuery({
    queryKey: ['audit', contractId, 'status'],
    queryFn: () => auditApi.getStatus(contractId!),
    enabled: !!contractId,
  });

  return {
    requestAudit,
    auditStatus,
    isLoadingStatus,
  };
};