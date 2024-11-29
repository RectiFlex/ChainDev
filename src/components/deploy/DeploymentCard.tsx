import React from 'react';
import { Server, ExternalLink } from 'lucide-react';

interface DeploymentCardProps {
  network: string;
  status: string;
  address?: string;
  timestamp?: string;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({
  network,
  status,
  address,
  timestamp,
}) => {
  return (
    <div className="glass-panel p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Server className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold">{network}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'deployed' ? 'bg-green-400/20 text-green-400' :
          status === 'pending' ? 'bg-yellow-400/20 text-yellow-400' :
          'bg-white/10 text-white/60'
        }`}>
          {status}
        </span>
      </div>
      
      {address && (
        <div className="mb-2">
          <div className="text-sm text-white/60 mb-1">Contract Address</div>
          <div className="flex items-center gap-2">
            <code className="glass-effect px-2 py-1 rounded text-sm flex-1">
              {address}
            </code>
            <button className="text-accent hover:text-accent/90">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      {timestamp && (
        <div className="text-sm text-white/60">
          Deployed: {timestamp}
        </div>
      )}
    </div>
  );
};

export default DeploymentCard;