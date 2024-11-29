import React, { useState } from 'react';
import { PlusCircle, Wand2 } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ContractEditor = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => {
    // Simulated AI response
    setGeneratedCode(`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GeneratedContract {
    // Generated based on your prompt
    // This is a placeholder for the AI-generated code
}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contract Editor</h2>
        <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors">
          <PlusCircle className="w-5 h-5" />
          New Contract
        </button>
      </div>

      <div className="space-y-4">
        <div className="glass-panel rounded-lg p-6">
          <label className="block text-sm font-medium mb-2">
            Describe your smart contract
          </label>
          <textarea
            className="w-full h-32 p-3 rounded-lg glass-effect focus:ring-2 focus:ring-accent/50 bg-transparent"
            placeholder="Describe the functionality you want in your smart contract..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleGenerate}
            className="mt-4 flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Wand2 className="w-5 h-5" />
            Generate Contract
          </button>
        </div>

        {generatedCode && (
          <div className="glass-panel rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Generated Smart Contract</h3>
            <SyntaxHighlighter
              language="solidity"
              style={atomOneDark}
              className="rounded-lg !bg-dark-glass"
            >
              {generatedCode}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractEditor;