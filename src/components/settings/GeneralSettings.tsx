import React from 'react';

const GeneralSettings = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent"
            defaultValue="My Smart Contract Project"
          />
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

        <div>
          <label className="block text-sm font-medium mb-1">
            Compiler Version
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option>0.8.19</option>
            <option>0.8.18</option>
            <option>0.8.17</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Gas Price Strategy
          </label>
          <select className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent">
            <option>Standard</option>
            <option>Fast</option>
            <option>Instant</option>
          </select>
        </div>

        <div className="pt-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;