// src/data/projects.ts
export type Game = {
  id: string;             // URLになる識別子 (例: "tama-ball")
  title: string;          // ゲーム名
  shortDescription: string; // トップページ用の短い説明
  description: string;   // 詳細ページ用の詳しい概要
  controls: { key: string; action: string }[]; // 操作方法
  thumbnailUrl: string;   // サムネイル画像
  gameUrl: string;        // UnityのWebGLファイルのパス
};

export const games: Game[] = [
  {
    id: "tama-ball",
    title: "TAMA-Ball-Shooting",
    shortDescription: "妖精を操作して敵を倒す2Dシューティングゲーム。",
    description: "Unityで制作した横スクロールシューティングゲームです。弾の軌道計算やスコアシステムを自作しています。",
    controls: [
      { key: "WASD / 矢印キー", action: "キャラクターの移動" },
      { key: "Space", action: "弾の発射" },
      { key: "Esc", action: "ポーズ画面を開く" },
    ],
    thumbnailUrl: "/images/tama-ball-thumb.png",
    gameUrl: "/games/tama-ball/index.html",
  },
];