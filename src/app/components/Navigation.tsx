import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import { Search, Menu } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Browse', path: '/browse' },
    { label: 'Services', path: '/services' },
    { label: 'How it Works', path: '/how-it-works' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#F94C10] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-gray-900">BRaket</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#F94C10] text-white rounded-full px-6">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
