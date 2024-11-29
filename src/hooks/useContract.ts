import { useCallback } from 'react';
import { contractsApi } from '../api/endpoints/contracts';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useContract = (id?: string) => {
  const { data: contracts, isLoading: isLoadingContracts } = useQuery({
    queryKey: ['contracts'],
    queryFn: contractsApi.list,
    enabled: !id,
  });

  const { mutateAsync: deployContract } = useMutation({
    mutationFn: (args: unknown[]) => contractsApi.deploy(id!, args),
  });

  const compile = useCallback(async () => {
    if (!id) throw new Error('Contract ID is required');
    return contractsApi.compile(id);
  }, [id]);

  return {
    contracts,
    isLoadingContracts,
    compile,
    deploy: deployContract,
  };
};