import { games } from '@/data/projects';
import GamePanel from '@/components/GamePanel';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">マイポートフォリオ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {games.map((game) => (
          <GamePanel key={game.id} {...game} />
        ))}
      </div>
    </main>
  );
}