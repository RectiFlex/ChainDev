export interface NavItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

export type ActivePage = 'landing' | 'editor' | 'audit' | 'deploy' | 'dashboard' | 'version' | 'docs' | 'settings';