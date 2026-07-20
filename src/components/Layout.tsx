import { Outlet, Link, useLocation } from 'react-router-dom';
import { List, Info } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Names', icon: List },
  { to: '/model-overview', label: 'Overview', icon: Info },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0b1020] flex flex-col">
      <header className="border-b border-white/10 bg-[#111633]">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-white tracking-tight">
            Name Display
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full px-4 flex gap-6 flex-1">
        <nav className="w-48 shrink-0 py-6 hidden md:block">
          <ul className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const active = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="flex-1 py-6 min-w-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111633] border-t border-white/10 z-40">
        <div className="flex">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
                  active ? 'text-white' : 'text-white/40'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
