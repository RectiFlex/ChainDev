import React from 'react';
import { ErrorBoundary } from './utils/errorBoundary';
import LandingPage from './pages/LandingPage';
import MainLayout from './components/layout/MainLayout';
import ContractEditor from './components/ContractEditor';
import SecurityAudit from './components/SecurityAudit';
import DashboardPage from './pages/DashboardPage';
import DeployPage from './pages/DeployPage';
import DocsPage from './pages/DocsPage';
import VersionControlPage from './pages/VersionControlPage';
import SettingsPage from './pages/SettingsPage';
import { useNavigationStore } from './store/navigationStore';
import { useAuthStore } from './store/authStore';

const App: React.FC = () => {
  const activePage = useNavigationStore((state) => state.activePage);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'editor':
        return <ContractEditor />;
      case 'audit':
        return <SecurityAudit />;
      case 'deploy':
        return <DeployPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'version':
        return <VersionControlPage />;
      case 'docs':
        return <DocsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <ContractEditor />;
    }
  };

  return (
    <ErrorBoundary>
      <MainLayout>
        {renderPage()}
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;