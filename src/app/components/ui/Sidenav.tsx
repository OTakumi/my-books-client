'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Search, PlusCircle, BarChart, Settings } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'マイ本棚', icon: Book },
    { href: '/search', label: '書籍検索', icon: Search },
    { href: '/register', label: '書籍登録', icon: PlusCircle },
    { href: '/stats', label: '読書統計', icon: BarChart },
  ];

  const footerMenuItems = [{ href: '/settings', label: '設定', icon: Settings }];

  return (
    <div className="bg-gray-800 text-white w-64 h-full flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <nav className="mt-6">
          <div className="space-y-2 px-4">
            {menuItems.map((item) => (
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
          </div>
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-gray-700">
        {footerMenuItems.map((item) => (
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
  );
};

export default Sidebar;
