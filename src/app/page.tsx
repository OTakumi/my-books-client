import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">マイ書籍</h2>
        <p className="text-gray-600 mb-6">あなたの書籍コレクションがここに表示されます。</p>

        {/* サンプル書籍リスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((book) => (
            <div
              key={book}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-4">
                <h3 className="font-medium">サンプル書籍タイトル {book}</h3>
                <p className="text-sm text-gray-500">著者名</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-600">追加日: 2023/01/01</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    読了済み
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
