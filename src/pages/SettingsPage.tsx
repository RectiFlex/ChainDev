import React from 'react';
import { Settings, Shield, Bell, Database, Network } from 'lucide-react';
import { useSettingsStore } from '../store/settingsStore';
import GeneralSettings from '../components/settings/GeneralSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import StorageSettings from '../components/settings/StorageSettings';
import NetworkSettings from '../components/settings/NetworkSettings';

const SettingsPage = () => {
  const { activeTab, setActiveTab } = useSettingsStore();

  const tabs = [
    { icon: <Settings className="w-5 h-5" />, label: "General", value: 'general' },
    { icon: <Shield className="w-5 h-5" />, label: "Security", value: 'security' },
    { icon: <Bell className="w-5 h-5" />, label: "Notifications", value: 'notifications' },
    { icon: <Database className="w-5 h-5" />, label: "Storage", value: 'storage' },
    { icon: <Network className="w-5 h-5" />, label: "Network", value: 'network' }
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'storage':
        return <StorageSettings />;
      case 'network':
        return <NetworkSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="glass-panel rounded-lg">
        <div className="border-b border-white/10">
          <nav className="flex gap-6 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${
                  activeTab === tab.value
                    ? 'border-accent text-accent'
                    : 'border-transparent hover:text-accent/90'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;