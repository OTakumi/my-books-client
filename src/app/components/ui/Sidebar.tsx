'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Search, PlusCircle, BarChart, Settings } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'マイ書籍', icon: Book, section: 'main' },
    { href: '/search', label: '書籍検索', icon: Search, section: 'main' },
    { href: '/register', label: '書籍登録', icon: PlusCircle, section: 'main' },
    { href: '/stats', label: '読書統計', icon: BarChart, section: 'main' },
    { href: '/settings', label: '設定', icon: Settings, section: 'footer' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <nav className="mt-6">
        <div className="space-y-2 px-4">
          {menuItems
            .filter((item) => item.section === 'main')
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center p-2 rounded-md hover:bg-gray-700 ${
                  pathname === item.href ? 'bg-gray-700' : ''
                }`}
              >
                <item.icon className="h-5 w-5 text-blue-400" />
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}

          <div className="pt-4 mt-4 border-t border-gray-700">
            {menuItems
              .filter((item) => item.section === 'footer')
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center p-2 rounded-md hover:bg-gray-700 ${
                    pathname === item.href ? 'bg-gray-700' : ''
                  }`}
                >
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
