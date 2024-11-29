export interface SmartContract {
  id: string;
  name: string;
  description: string;
  code: string;
  network: string;
  status: 'draft' | 'auditing' | 'deployed';
  createdAt: Date;
  updatedAt: Date;
}

export interface SecurityAudit {
  contractId: string;
  vulnerabilities: Array<{
    severity: 'high' | 'medium' | 'low';
    description: string;
    location: string;
  }>;
  gasOptimizations: Array<{
    suggestion: string;
    impact: string;
  }>;
  score: number;
}