'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, Star, Users, Briefcase, FileText,
  FolderOpen, Settings, LogOut, Menu, X, MessageSquare,
  TrendingUp, ChevronRight, Bell
} from 'lucide-react';

const NAV = [
  { label: 'Dashboard',     href: '/admin',                  icon: LayoutDashboard },
  { label: 'Hero & Stats',  href: '/admin/hero',             icon: TrendingUp },
  { label: 'Testimonials',  href: '/admin/testimonials',     icon: Star },
  { label: 'Team',          href: '/admin/team',             icon: Users },
  { label: 'Blog Posts',    href: '/admin/blog',             icon: FileText },
  { label: 'Portfolio',     href: '/admin/portfolio',        icon: FolderOpen },
  { label: 'Careers',       href: '/admin/careers',          icon: Briefcase },
  { label: 'Enquiries',     href: '/admin/enquiries',        icon: MessageSquare },
  { label: 'Site Settings', href: '/admin/settings',         icon: Settings },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-gray-900 w-64">
      <div className="px-6 py-5 border-b border-gray-800">
        <span className="text-lg font-bold text-white">
          <span style={{ color: '#4285F4' }}>OneClick</span> Admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              {active && <ChevronRight className="h-3 w-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex z-10">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 h-14 flex items-center justify-between shrink-0">
          <button
            className="lg:hidden p-1 text-gray-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <a
              href="/"
              target="_blank"
              className="text-xs text-gray-500 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              View Site ↗
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
