'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, LogOut } from 'lucide-react';

interface UserMenuProps {
  userId?: string;
  userName?: string;
}

export const UserMenu: React.FC<UserMenuProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  // メニュー外クリックで閉じる機能
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // イベントリスナーを追加
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // クリーンアップ
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        onClick={toggleMenu}
        className="flex items-center text-gray-700 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <User className="h-5 w-5" />
        </div>
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            プロフィール
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            設定
          </Link>
          <div className="border-t border-gray-100" />
          <Link
            href="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
