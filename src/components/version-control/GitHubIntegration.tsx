import React, { useState } from 'react';
import { Github, Link2, Check, X } from 'lucide-react';

interface GitHubIntegrationProps {
  onConnect: (token: string) => void;
  isConnected: boolean;
}

const GitHubIntegration: React.FC<GitHubIntegrationProps> = ({ onConnect, isConnected }) => {
  const [token, setToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);

  const handleConnect = () => {
    if (token) {
      onConnect(token);
      setShowTokenInput(false);
      setToken('');
    }
  };

  return (
    <div className="glass-panel p-6 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Github className="w-6 h-6 text-accent" />
          <div>
            <h3 className="text-lg font-semibold">GitHub Integration</h3>
            <p className="text-sm text-white/60">Connect your GitHub account to sync your contracts</p>
          </div>
        </div>
        {isConnected ? (
          <div className="flex items-center gap-2 text-green-400">
            <Check className="w-5 h-5" />
            <span>Connected</span>
          </div>
        ) : (
          <button
            onClick={() => setShowTokenInput(true)}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Link2 className="w-5 h-5" />
            Connect GitHub
          </button>
        )}
      </div>

      {showTokenInput && !isConnected && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              GitHub Personal Access Token
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="flex-1 px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent"
                placeholder="Enter your GitHub token"
              />
              <button
                onClick={handleConnect}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Check className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowTokenInput(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-sm text-white/60">
            Need help? Learn how to create a{' '}
            <a
              href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Personal Access Token
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubIntegration;