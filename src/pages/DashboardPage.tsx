import React from 'react';
import ContractMetrics from '../components/dashboard/ContractMetrics';
import { LineChart, Activity, Clock } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <select className="glass-effect rounded-lg px-3 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <ContractMetrics />

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-semibold">Transaction History</h3>
          </div>
          <div className="h-64 flex items-center justify-center glass-effect rounded-lg">
            Chart placeholder
          </div>
        </div>

        <div className="glass-panel p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 glass-effect rounded-lg hover:bg-white/5">
                <Clock className="w-5 h-5 text-white/40" />
                <div>
                  <p className="font-medium">Contract Interaction</p>
                  <p className="text-sm text-white/60">0x1234...5678</p>
                </div>
                <span className="ml-auto text-sm text-white/40">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;