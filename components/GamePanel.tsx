import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/data/projects';

export default function GamePanel({
  id,
  title,
  shortDescription,
  thumbnailUrl,
}: Game) {
  return (
    <Link
      href={`/games/${id}`}
      className="block border border-indigo-950/60 bg-indigo-950/30 hover:bg-indigo-950/60 hover:border-indigo-800/60 rounded-xl overflow-hidden transition-all duration-200"
    >
      <div className="relative aspect-video">
        <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-slate-400 text-sm mb-4">{shortDescription}</p>
      </div>
    </Link>
  );
}