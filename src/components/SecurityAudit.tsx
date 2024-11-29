import React, { useState } from 'react';
import { Shield, AlertTriangle, Zap, Search, Loader } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SecurityAudit = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contractCode, setContractCode] = useState('');
  const [auditResults, setAuditResults] = useState<{
    score: number;
    vulnerabilities: Array<{ severity: 'high' | 'medium' | 'low'; description: string; location: string }>;
    gasOptimizations: Array<{ suggestion: string; impact: string }>;
  } | null>(null);

  const handleAudit = async () => {
    if (!contractAddress) return;

    setIsLoading(true);
    // Simulated API call
    setTimeout(() => {
      // Simulated contract code fetch
      setContractCode(`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    mapping(address => uint256) public balances;
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount);
        balances[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success);
    }
}`);

      // Simulated audit results
      setAuditResults({
        score: 92,
        vulnerabilities: [
          {
            severity: 'high',
            description: 'Potential reentrancy vulnerability in withdraw function',
            location: 'Line 12-17'
          },
          {
            severity: 'medium',
            description: 'Missing zero address check in deposit function',
            location: 'Line 8-10'
          }
        ],
        gasOptimizations: [
          {
            suggestion: 'Use uint256 instead of uint',
            impact: 'Minor gas savings'
          },
          {
            suggestion: 'Optimize storage access in withdraw function',
            impact: 'Potential 15% gas reduction'
          }
        ]
      });

      setIsLoading(false);
    }, 2000);
  };

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-blue-400';
      default:
        return 'text-white/60';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Security Audit</h2>

      <div className="glass-panel p-6 rounded-lg">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Contract Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent"
                placeholder="Enter contract address (0x...)"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
              />
              <button
                onClick={handleAudit}
                disabled={isLoading}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isLoading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                Audit Contract
              </button>
            </div>
          </div>
        </div>

        {contractCode && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contract Code</h3>
            <SyntaxHighlighter
              language="solidity"
              style={atomOneDark}
              className="rounded-lg !bg-dark-glass"
            >
              {contractCode}
            </SyntaxHighlighter>
          </div>
        )}

        {auditResults && (
          <>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="glass-panel p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold">Security Score</h3>
                </div>
                <div className="text-4xl font-bold text-green-400">{auditResults.score}/100</div>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-lg font-semibold">Vulnerabilities</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Critical</span>
                    <span className="font-bold text-red-400">
                      {auditResults.vulnerabilities.filter(v => v.severity === 'high').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium</span>
                    <span className="font-bold text-yellow-400">
                      {auditResults.vulnerabilities.filter(v => v.severity === 'medium').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Low</span>
                    <span className="font-bold text-blue-400">
                      {auditResults.vulnerabilities.filter(v => v.severity === 'low').length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold">Gas Optimization</h3>
                </div>
                <div className="text-4xl font-bold text-accent">-15%</div>
                <p className="text-sm text-white/60">Potential gas savings</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Vulnerabilities</h3>
                <div className="space-y-4">
                  {auditResults.vulnerabilities.map((vulnerability, index) => (
                    <div key={index} className="glass-effect p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className={`w-5 h-5 ${getSeverityColor(vulnerability.severity)}`} />
                        <span className={`font-medium ${getSeverityColor(vulnerability.severity)}`}>
                          {vulnerability.severity.charAt(0).toUpperCase() + vulnerability.severity.slice(1)} Severity
                        </span>
                      </div>
                      <p className="mb-2">{vulnerability.description}</p>
                      <p className="text-sm text-white/60">Location: {vulnerability.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Gas Optimizations</h3>
                <div className="space-y-4">
                  {auditResults.gasOptimizations.map((optimization, index) => (
                    <div key={index} className="glass-effect p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="font-medium">{optimization.suggestion}</span>
                      </div>
                      <p className="text-sm text-white/60">Impact: {optimization.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecurityAudit;