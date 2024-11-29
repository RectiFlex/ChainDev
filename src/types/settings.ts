export type SettingsTab = 'general' | 'security' | 'notifications' | 'storage' | 'network';

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  autoBackup: boolean;
  apiKeyVisibility: boolean;
}

export interface NotificationSettings {
  deploymentAlerts: boolean;
  securityAlerts: boolean;
  updateNotifications: boolean;
  emailNotifications: boolean;
}

export interface StorageSettings {
  automaticPruning: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  maxStorageSize: number;
}

export interface NetworkSettings {
  defaultGasPrice: 'low' | 'medium' | 'high';
  defaultNetwork: string;
  autoGasAdjustment: boolean;
}