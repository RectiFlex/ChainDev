import React, { useState } from 'react';
import { BookOpen, Code, Shield } from 'lucide-react';
import DocSection from '../components/docs/DocSection';
import CodeExample from '../components/docs/CodeExample';
import Modal from '../components/common/Modal';
import ServiceLinks from '../components/docs/ServiceLinks';

const DocsPage = () => {
  const [activeModal, setActiveModal] = useState<'getting-started' | 'api' | 'security' | null>(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'getting-started':
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Start Guide</h4>
            <div className="space-y-4">
              <p>Follow these steps to get started with smart contract development:</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>Create a new contract using the Contract Editor</li>
                <li>Describe your contract requirements in natural language</li>
                <li>Review and customize the generated smart contract</li>
                <li>Run security audits to check for vulnerabilities</li>
                <li>Deploy your contract to your chosen network</li>
              </ol>
              <CodeExample
                language="solidity"
                title="Example Contract"
                code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _totalSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
    }
}`}
              />
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">API Documentation</h4>
            <div className="space-y-4">
              <div className="glass-effect p-4 rounded-lg">
                <h5 className="font-medium mb-2">Contract Generation</h5>
                <CodeExample
                  language="typescript"
                  code={`// Generate a new contract
const contract = await api.generateContract({
  type: 'token',
  name: 'MyToken',
  features: ['mintable', 'burnable']
});`}
                />
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h5 className="font-medium mb-2">Security Audit</h5>
                <CodeExample
                  language="typescript"
                  code={`// Run security audit
const audit = await api.auditContract(contract.id);
console.log(audit.vulnerabilities);`}
                />
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h5 className="font-medium mb-2">Deployment</h5>
                <CodeExample
                  language="typescript"
                  code={`// Deploy contract
const deployment = await api.deployContract({
  contractId: contract.id,
  network: 'ethereum',
  constructorArgs: []
});`}
                />
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Security Guidelines</h4>
            <div className="space-y-4">
              <div className="glass-effect p-4 rounded-lg">
                <h5 className="font-medium mb-2">Best Practices</h5>
                <ul className="list-disc list-inside space-y-2">
                  <li>Always use the latest Solidity version</li>
                  <li>Implement proper access control</li>
                  <li>Use SafeMath for arithmetic operations</li>
                  <li>Follow the Checks-Effects-Interactions pattern</li>
                  <li>Properly validate all inputs</li>
                </ul>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h5 className="font-medium mb-2">Common Vulnerabilities</h5>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reentrancy attacks</li>
                  <li>Integer overflow/underflow</li>
                  <li>Unauthorized access</li>
                  <li>Front-running</li>
                  <li>Gas limitations</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-white/60">
          Learn how to use our AI-powered smart contract development platform effectively.
        </p>
      </div>

      <ServiceLinks />

      <div className="grid grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setActiveModal('getting-started')}
          className="glass-panel p-6 rounded-lg hover:ring-2 hover:ring-accent/50 transition-all text-left"
        >
          <BookOpen className="w-8 h-8 text-accent" />
          <h3 className="text-lg font-semibold mb-2 mt-4">Getting Started</h3>
          <p className="text-white/60">Quick start guide and basic concepts</p>
        </button>

        <button
          onClick={() => setActiveModal('api')}
          className="glass-panel p-6 rounded-lg hover:ring-2 hover:ring-accent/50 transition-all text-left"
        >
          <Code className="w-8 h-8 text-accent" />
          <h3 className="text-lg font-semibold mb-2 mt-4">API Reference</h3>
          <p className="text-white/60">Complete API documentation</p>
        </button>

        <button
          onClick={() => setActiveModal('security')}
          className="glass-panel p-6 rounded-lg hover:ring-2 hover:ring-accent/50 transition-all text-left"
        >
          <Shield className="w-8 h-8 text-accent" />
          <h3 className="text-lg font-semibold mb-2 mt-4">Security Guide</h3>
          <p className="text-white/60">Security best practices and guidelines</p>
        </button>
      </div>

      <DocSection
        title="Quick Start Guide"
        description="Get up and running with smart contract development in minutes."
      >
        <div className="space-y-6">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li className="text-white/80">Open the Contract Editor</li>
              <li className="text-white/80">Describe your contract requirements</li>
              <li className="text-white/80">Generate and customize your contract</li>
              <li className="text-white/80">Run security audits</li>
              <li className="text-white/80">Deploy to your chosen network</li>
            </ol>
          </div>

          <CodeExample
            language="solidity"
            title="Example Token Contract"
            code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        decimals = 18;
    }

    function mint(address to, uint256 amount) public {
        totalSupply += amount;
        balanceOf[to] += amount;
        emit Transfer(address(0), to, amount);
    }
}`}
          />
        </div>
      </DocSection>

      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={
          activeModal === 'getting-started' ? 'Getting Started Guide' :
          activeModal === 'api' ? 'API Documentation' :
          activeModal === 'security' ? 'Security Guidelines' :
          ''
        }
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default DocsPage;