'use client';

import React from 'react';
import { Library } from 'lucide-react';
import { usePathname } from 'next/navigation';
import UserMenu from './UserMenu';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const pathname = usePathname();

  // パスに基づいてタイトルを設定
  const getPageTitle = (): string => {
    if (title) return title;

    switch (pathname) {
      case '/':
        return 'My Books';
      case '/search':
        return '書籍検索';
      case '/register':
        return '書籍登録';
      case '/stats':
        return '読書統計';
      case '/settings':
        return '設定';
      default:
        return 'My Books';
    }
  };

  return (
    <header className="bg-white shadow-sm z-10 w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <Library className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">{getPageTitle()}</span>
          </div>
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
