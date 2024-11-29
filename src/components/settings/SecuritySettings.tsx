import React from 'react';
import { Shield, Key, Lock } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
      
      <div className="space-y-4">
        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-white/60">Add an extra layer of security to your account</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            </label>
          </div>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">API Key Management</p>
                <p className="text-sm text-white/60">Control visibility and access of API keys</p>
              </div>
            </div>
            <button className="px-3 py-1.5 text-sm glass-effect hover:bg-white/5 rounded-lg transition-colors">
              Manage Keys
            </button>
          </div>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Automatic Backups</p>
                <p className="text-sm text-white/60">Secure your contracts with encrypted backups</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;