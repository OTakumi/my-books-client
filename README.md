# My Books - 書籍管理アプリケーション

My Booksは個人の書籍コレクションを管理するためのウェブアプリケーションです。Next.js 15とReact 19を使用して実装されており、書籍の検索、登録、統計分析などの機能を備えています。

## 機能

- **マイ書籍**: 登録した書籍のコレクション管理
- **書籍検索**: タイトル、著者名、ISBNによる書籍検索
- **書籍登録**: 新しい書籍の詳細情報を登録
- **読書統計**: 読書習慣や傾向を可視化
- **設定**: アプリケーション設定のカスタマイズ

## 技術スタック

- **フロントエンド**: React 19, Next.js 15
- **スタイリング**: TailwindCSS
- **アイコン**: Lucide React
- **開発ツール**: Deno, Biome (リンティング/フォーマット)

## 必要条件

- Node.js 20.0以上
- Deno 1.40以上
- npm または yarn

## インストールと実行

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-username/my-books.git
cd my-books
```

### 2. 依存関係のインストール

```bash
npm install
# または
yarn install
```

### 3. アプリケーションの起動

開発サーバー（Turbopack使用）:

```bash
npm run dev
# または
yarn dev
```

アプリケーションは http://localhost:3000 で実行されます。

## コード品質とフォーマット

このプロジェクトでは、Denoを使用してBiomeによるリンティングとフォーマットを行います。

### リンティング

```bash
npm run lint
# または
yarn lint
```

### フォーマット

```bash
npm run format
# または
yarn format
```

## ビルドと本番環境での実行

### ビルド

```bash
npm run build
# または
yarn build
```

### 本番環境での実行

```bash
npm run start
# または
yarn start
```

## プロジェクト構造

```
/app
  /layout.tsx             # ルートレイアウト
  /page.tsx               # ホームページ（マイ書籍）
  /search/page.tsx        # 書籍検索ページ
  /register/page.tsx      # 書籍登録ページ
  /stats/page.tsx         # 読書統計ページ
  /settings/page.tsx      # 設定ページ
  /components
    /ui
      /Header.tsx         # ヘッダーコンポーネント
      /Sidebar.tsx        # サイドバーコンポーネント
      /UserMenu.tsx       # ユーザーメニューコンポーネント
      /MainLayout.tsx     # メインレイアウトコンポーネント
```
