import React, { useState } from 'react';
import { 
  Wallet, 
  ChevronRight, 
  Users, 
  Activity, 
  Shield, 
  Zap, 
  Code2, 
  GitBranch, 
  Rocket,
  MessageCircle,
  Globe,
  Twitter,
  Github,
  MessagesSquare
} from 'lucide-react';
import Modal from '../components/common/Modal';
import { useAuthStore } from '../store/authStore';

const LandingPage: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp } = useAuthStore();

  const handleAuth = async (email: string, password: string) => {
    if (isSignUp) {
      await signUp(email, password);
    } else {
      await signIn(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">SmartAI</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-accent transition-colors">Features</a>
              <a href="#solutions" className="hover:text-accent transition-colors">Solutions</a>
              <a href="#roadmap" className="hover:text-accent transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-accent transition-colors">Community</a>
            </nav>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  setIsSignUp(false);
                  setShowAuthModal(true);
                }}
                className="px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setShowAuthModal(true);
                }}
                className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            The Future of Smart Contract Development
          </h1>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Build, test, and deploy secure smart contracts with AI-powered assistance and comprehensive testing frameworks.
          </p>
          <button
            onClick={() => {
              setIsSignUp(true);
              setShowAuthModal(true);
            }}
            className="px-8 py-4 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors flex items-center gap-2 mx-auto"
          >
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-white/60">Everything you need to build secure smart contracts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Security First",
                description: "Automated security audits and vulnerability detection"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "AI-Powered",
                description: "Intelligent contract generation and optimization"
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: "Comprehensive Testing",
                description: "Advanced testing framework with simulation capabilities"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-panel p-8 rounded-lg text-center">
                <div className="flex justify-center mb-6 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Solutions</h2>
            <p className="text-xl text-white/60">End-to-end smart contract development workflow</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Code2 className="w-12 h-12" />,
                title: "Smart Contract Development",
                features: [
                  "AI-assisted code generation",
                  "Security-first approach",
                  "Best practices templates"
                ]
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Security & Auditing",
                features: [
                  "Automated vulnerability detection",
                  "Real-time security monitoring",
                  "Comprehensive audit reports"
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="glass-panel p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-accent">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold">{solution.title}</h3>
                </div>
                <ul className="space-y-4">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Roadmap</h2>
            <p className="text-xl text-white/60">Our vision for the future</p>
          </div>
          <div className="space-y-8">
            {[
              {
                quarter: "Q2 2024",
                title: "Enhanced AI Capabilities",
                description: "Advanced contract generation and optimization"
              },
              {
                quarter: "Q3 2024",
                title: "Multi-chain Support",
                description: "Expanded blockchain network integration"
              },
              {
                quarter: "Q4 2024",
                title: "Enterprise Features",
                description: "Advanced security and collaboration tools"
              }
            ].map((milestone, index) => (
              <div key={index} className="glass-panel p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-accent font-bold">{milestone.quarter}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-white/60">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-white/60">Connect with developers and blockchain enthusiasts</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <MessagesSquare className="w-12 h-12" />,
                name: "Discord",
                members: "5,000+",
                link: "#"
              },
              {
                icon: <Twitter className="w-12 h-12" />,
                name: "Twitter",
                members: "10,000+",
                link: "#"
              },
              {
                icon: <Github className="w-12 h-12" />,
                name: "GitHub",
                members: "2,000+",
                link: "#"
              },
              {
                icon: <MessageCircle className="w-12 h-12" />,
                name: "Forum",
                members: "3,000+",
                link: "#"
              }
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="glass-panel p-8 rounded-lg text-center hover:ring-2 hover:ring-accent/50 transition-all"
              >
                <div className="flex justify-center mb-6 text-accent">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-white/60">{platform.members} members</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <Modal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title={isSignUp ? "Create an Account" : "Welcome Back"}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 glass-effect rounded-lg focus:ring-2 focus:ring-accent/50 bg-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={() => handleAuth('demo@example.com', 'password')}
            className="w-full py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-accent hover:underline"
            >
              {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;