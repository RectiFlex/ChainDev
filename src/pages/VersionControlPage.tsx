import React from 'react';
import { GitBranch, GitCommit, GitMerge, Github } from 'lucide-react';
import GitHubIntegration from '../components/version-control/GitHubIntegration';
import { useGitHubStore } from '../store/githubStore';

const VersionControlPage = () => {
  const { isConnected, connect, repositories } = useGitHubStore();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Version Control</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors">
            <GitBranch className="w-5 h-5" />
            New Branch
          </button>
        </div>
      </div>

      <GitHubIntegration onConnect={connect} isConnected={isConnected} />

      {isConnected && repositories.length > 0 && (
        <div className="glass-panel p-6 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Github className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-semibold">Connected Repositories</h2>
          </div>
          <div className="space-y-3">
            {repositories.map((repo) => (
              <div key={repo.full_name} className="glass-effect p-4 rounded-lg">
                <h3 className="font-medium">{repo.name}</h3>
                {repo.description && (
                  <p className="text-sm text-white/60 mt-1">{repo.description}</p>
                )}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline mt-2 inline-block"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="glass-panel p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-6 h-6 text-accent" />
          <h2 className="text-lg font-semibold">Current Branch: main</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              hash: "8f62d9e",
              message: "Implement token distribution logic",
              author: "Alice Chen",
              time: "2 hours ago",
              type: "commit"
            },
            {
              hash: "merge",
              message: "Merge feature/staking into main",
              author: "Bob Smith",
              time: "5 hours ago",
              type: "merge"
            },
            {
              hash: "3a1b4c2",
              message: "Add staking rewards calculation",
              author: "Charlie Davis",
              time: "6 hours ago",
              type: "commit"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 glass-effect rounded-lg">
              {item.type === 'merge' ? (
                <GitMerge className="w-5 h-5 text-accent mt-1" />
              ) : (
                <GitCommit className="w-5 h-5 text-accent mt-1" />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <code className="text-sm glass-effect px-2 py-1 rounded">
                    {item.hash}
                  </code>
                  <span className="text-sm text-white/40">{item.time}</span>
                </div>
                <p className="font-medium mt-1">{item.message}</p>
                <p className="text-sm text-white/60 mt-1">by {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Branches</h2>
          <div className="space-y-3">
            {[
              { name: "main", active: true },
              { name: "feature/governance", active: false },
              { name: "feature/staking", active: false }
            ].map((branch, index) => (
              <div key={index} className="flex items-center justify-between p-3 glass-effect rounded-lg">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-5 h-5 text-white/40" />
                  <span className={branch.active ? "font-semibold" : ""}>
                    {branch.name}
                  </span>
                </div>
                {branch.active && (
                  <span className="text-sm text-green-400 font-medium">
                    Current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Merges</h2>
          <div className="space-y-3">
            {[
              { from: "feature/staking", to: "main", time: "5 hours ago" },
              { from: "feature/auth", to: "main", time: "2 days ago" },
              { from: "bugfix/gas", to: "main", time: "3 days ago" }
            ].map((merge, index) => (
              <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                <GitMerge className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">
                    {merge.from} → {merge.to}
                  </p>
                  <p className="text-sm text-white/60">{merge.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionControlPage;