// src/components/GamePlayArea.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

type GamePlayAreaProps = {
  gameUrl: string;
  thumbnailUrl: string;
  title: string;
};

export default function GamePlayArea({
  gameUrl,
  thumbnailUrl,
  title,
}: GamePlayAreaProps) {
  // ゲームがプレイ中かどうかを管理する状態
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* 16:9 のアスペクト比を固定して崩れを防ぐコンテナ */}
      <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
        {isPlaying ? (
          /* プレイ中：iframe で Unity WebGL を表示 */
          <iframe
            src={gameUrl}
            title={title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; keyboard"
          />
        ) : (
          /* 待機中：サムネイル + クリックで起動するオーバーレイ */
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer group"
          >
            {/* サムネイル画像（ホバーで少し拡大） */}
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-85 group-hover:opacity-100"
            />

            {/* 中央の「ゲームをスタート」ボタンUI */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-3">
              <div className="bg-indigo-600 group-hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>ゲームをスタートする</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                ※クリックすると画面内でゲームが読み込まれます
              </p>
            </div>
          </div>
        )}
      </div>

      {/* プレイ中のみ画面下部に表示するバー */}
      {isPlaying && (
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            プレイ中
          </span>
          <button
            onClick={() => setIsPlaying(false)}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
          >
            ✕ ゲームを終了する
          </button>
        </div>
      )}
    </div>
  );
}