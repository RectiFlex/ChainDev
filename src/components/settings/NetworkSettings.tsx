import React from 'react';
import { Network, Zap, Settings } from 'lucide-react';

const NetworkSettings = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold mb-4">Network Settings</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Default Gas Price Strategy
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option value="low">Low (Slower)</option>
            <option value="medium">Medium (Recommended)</option>
            <option value="high">High (Faster)</option>
          </select>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Automatic Gas Adjustment</p>
                <p className="text-sm text-white/60">Automatically adjust gas prices based on network conditions</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Default Network
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option>Ethereum Mainnet</option>
            <option>Polygon</option>
            <option>BSC</option>
            <option>Arbitrum</option>
          </select>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Network className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Network Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-sm text-white/60">All networks operational</span>
                </div>
              </div>
            </div>
            <button className="px-3 py-1.5 text-sm glass-effect hover:bg-white/5 rounded-lg transition-colors">
              View Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkSettings;