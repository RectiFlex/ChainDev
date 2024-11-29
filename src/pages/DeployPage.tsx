import React from 'react';
import DeploymentCard from '../components/deploy/DeploymentCard';
import { Rocket } from 'lucide-react';

const DeployPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Deploy</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Rocket className="w-5 h-5" />
          Deploy Contract
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DeploymentCard
          network="Ethereum Mainnet"
          status="deployed"
          address="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
          timestamp="2024-03-15 14:30 UTC"
        />
        <DeploymentCard
          network="Polygon"
          status="pending"
          address="0x123..."
        />
        <DeploymentCard
          network="Binance Smart Chain"
          status="not deployed"
        />
        <DeploymentCard
          network="Arbitrum"
          status="not deployed"
        />
      </div>
    </div>
  );
};

export default DeployPage;