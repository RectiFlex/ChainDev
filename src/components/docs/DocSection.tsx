import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DocSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DocSection: React.FC<DocSectionProps> = ({ title, description, children }) => {
  return (
    <div className="glass-panel p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white/60 mb-6">{description}</p>
      {children}
    </div>
  );
};

export default DocSection;