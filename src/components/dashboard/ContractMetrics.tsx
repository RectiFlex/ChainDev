import React from 'react';
import { BarChart3, Users, Activity } from 'lucide-react';

const ContractMetrics = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="glass-panel p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Total Transactions</h3>
        </div>
        <div className="text-3xl font-bold">1,234</div>
        <p className="text-sm text-white/60 mt-2">+12.5% from last week</p>
      </div>

      <div className="glass-panel p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-green-400" />
          <h3 className="text-lg font-semibold">Unique Users</h3>
        </div>
        <div className="text-3xl font-bold">856</div>
        <p className="text-sm text-white/60 mt-2">+5.2% from last week</p>
      </div>

      <div className="glass-panel p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">Gas Usage</h3>
        </div>
        <div className="text-3xl font-bold">2.1M</div>
        <p className="text-sm text-white/60 mt-2">-8.3% from last week</p>
      </div>
    </div>
  );
};

export default ContractMetrics;