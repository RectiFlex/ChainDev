import React from 'react';
import { 
  Code2, 
  Shield, 
  Rocket, 
  LayoutDashboard, 
  GitBranch,
  BookOpen,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Code2 className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">SmartAI</h1>
      </div>
      
      <nav className="space-y-2">
        {[
          { icon: <Code2 className="w-5 h-5" />, label: 'Contract Editor' },
          { icon: <Shield className="w-5 h-5" />, label: 'Security Audit' },
          { icon: <Rocket className="w-5 h-5" />, label: 'Deploy' },
          { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
          { icon: <GitBranch className="w-5 h-5" />, label: 'Version Control' },
          { icon: <BookOpen className="w-5 h-5" />, label: 'Documentation' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings' }
        ].map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;