import React from 'react';
import { FileText, TestTube, Box } from 'lucide-react';
import { useNavigationStore } from '../../store/navigationStore';

const ServiceLinks = () => {
  const { setActivePage } = useNavigationStore();

  const services = [
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Documentation Generator",
      description: "Generate comprehensive documentation for your smart contracts",
      onClick: () => setActivePage('docs', 'generator')
    },
    {
      icon: <TestTube className="w-8 h-8 text-accent" />,
      title: "Test Framework",
      description: "Create and run automated tests for your contracts",
      onClick: () => setActivePage('docs', 'testing')
    },
    {
      icon: <Box className="w-8 h-8 text-accent" />,
      title: "Template Manager",
      description: "Browse and use pre-audited contract templates",
      onClick: () => setActivePage('docs', 'templates')
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {services.map((service) => (
        <button
          key={service.title}
          onClick={service.onClick}
          className="glass-panel p-6 rounded-lg hover:ring-2 hover:ring-accent/50 transition-all text-left"
        >
          {service.icon}
          <h3 className="text-lg font-semibold mb-2 mt-4">{service.title}</h3>
          <p className="text-white/60">{service.description}</p>
        </button>
      ))}
    </div>
  );
}

export default ServiceLinks;