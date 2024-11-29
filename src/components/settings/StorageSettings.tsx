import React from 'react';
import { HardDrive, Clock, Database } from 'lucide-react';

const StorageSettings = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold mb-4">Storage Settings</h2>
      
      <div className="space-y-4">
        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Automatic Pruning</p>
                <p className="text-sm text-white/60">Automatically remove old contract versions</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Backup Frequency
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Maximum Storage Size
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option value="5">5 GB</option>
            <option value="10">10 GB</option>
            <option value="20">20 GB</option>
            <option value="50">50 GB</option>
          </select>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Current Storage Usage</p>
                <div className="mt-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-sm text-white/60 mt-1">3.2 GB of 5 GB used</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageSettings;