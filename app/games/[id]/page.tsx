// src/app/games/[id]/page.tsx
import Link from 'next/link';
import { games } from '@/data/projects';
import { notFound } from 'next/navigation';
import GamePlayArea from '@/components/GamePlayArea'; // iframe表示用のコンポーネント

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // URLのIDに合うゲームデータを検索
  const game = games.find((g) => g.id === id);

  // 該当するゲームが存在しない場合は404ページを表示
  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      {/* トップへ戻るボタン */}
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-indigo-400 hover:underline text-sm mb-6 inline-block">
          ← ポートフォリオ一覧に戻る
        </Link>

        <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
        <p className="text-slate-300 mb-8">{game.description}</p>

        {/* 操作方法セクション */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-indigo-400 mb-4">🎮 基本操作方法</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {game.controls.map((ctrl, i) => (
              <div key={i} className="flex justify-between bg-slate-800 p-3 rounded border border-slate-700">
                <span className="font-mono bg-slate-900 px-2 py-1 rounded text-xs text-indigo-300">
                  {ctrl.key}
                </span>
                <span className="text-sm text-slate-300">{ctrl.action}</span>
              </div>
            ))}
          </div>
        </section>

        {/* プレイエリア（クリックでiframe起動） */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-4">🕹️ プレイ画面</h2>
          <GamePlayArea gameUrl={game.gameUrl} thumbnailUrl={game.thumbnailUrl} title={game.title} />
        </section>
      </div>
    </main>
  );
}