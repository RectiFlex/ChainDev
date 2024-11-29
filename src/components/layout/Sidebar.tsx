import React from 'react';
import { 
  Code2, 
  Shield, 
  Rocket, 
  LayoutDashboard, 
  GitBranch,
  BookOpen,
  Settings,
  LogOut
} from 'lucide-react';
import { NavItem } from '../../types/navigation';
import { useNavigationStore } from '../../store/navigationStore';
import { useAuthStore } from '../../store/authStore';

const navItems: NavItem[] = [
  { icon: <Code2 className="w-5 h-5" />, label: 'Contract Editor', path: 'editor' },
  { icon: <Shield className="w-5 h-5" />, label: 'Security Audit', path: 'audit' },
  { icon: <Rocket className="w-5 h-5" />, label: 'Deploy', path: 'deploy' },
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: 'dashboard' },
  { icon: <GitBranch className="w-5 h-5" />, label: 'Version Control', path: 'version' },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Documentation', path: 'docs' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: 'settings' }
];

const Sidebar = () => {
  const { activePage, setActivePage } = useNavigationStore();
  const { signOut, user } = useAuthStore();

  return (
    <div className="w-64 glass-panel fixed left-0 top-0 h-screen p-4">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-8 h-8 text-accent" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
          SmartAI
        </h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => setActivePage(item.path as any)}
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-all duration-200 ${
              activePage === item.path
                ? 'glass-effect text-accent accent-glow'
                : 'hover:bg-white/5 hover:text-accent'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="glass-effect p-4 rounded-lg mb-4">
          <div className="text-sm text-white/60">Signed in as</div>
          <div className="font-medium truncate">{user?.email}</div>
        </div>
        <button
          onClick={signOut}
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-white/5 text-red-400 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;