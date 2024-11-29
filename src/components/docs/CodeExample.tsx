import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy } from 'lucide-react';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ code, language = 'solidity', title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="glass-effect rounded-lg overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-white/10 flex justify-between items-center">
          <span className="text-sm font-medium">{title}</span>
          <button
            onClick={copyToClipboard}
            className="p-1 hover:bg-white/5 rounded transition-colors"
            title="Copy code"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className="!bg-transparent !m-0"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeExample;