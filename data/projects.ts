// src/data/projects.ts
export type Game = {
  id: string;             // URLになる識別子 (例: "tama-ball")
  title: string;          // ゲーム名
  shortDescription: string; // トップページ用の短い説明
  description: string;   // 詳細ページ用の詳しい概要
  controls: { key: string; action: string }[]; // 操作方法
  thumbnailUrl: string;   // サムネイル画像
  previewUrl: string[];   //プレビュー画像
  gameUrl: string;        // UnityのWebGLファイルのパス
};
/*
  {
    id: " ",
    title: " ",
    shortDescription: " ",
    description: " ",
    controls: [
      { key: " ", action: " " },
      { key: " ", action: " " },
      { key: " ", action: " " },
      { key: " ", action: " " }
    ],
    thumbnailUrl: "/images/xxx.png",
    previewUrl: ["",""],
    gameUrl: "/games/xxx/index.html",
  },
*/

export const games: Game[] = [
  {
    id: "tama-ball",
    title: "TAMA-Ball-Shooting",
    shortDescription: "大学2年生の時に初めて作った2Dシューティングゲーム。",
    description: "Unityで制作した縦スクロールシューティングゲームです。弾の軌道計算やスコアシステムを自作しています。\n KeyConfigはコントローラーのみ対応",
    controls: [
      { key: "WASD / 矢印キー", action: "キャラクターの移動" },
      { key: "Z", action: "弾の発射" },
      { key: "Shift", action: "低速移動" },
      { key: "X" , action: "ボム" }
    ],
    thumbnailUrl: "/images/tama-ball/tama-ball-thumb.png",
    previewUrl: ["",],
    gameUrl: "/games/tama-ball/index.html",
  },
  {
    id: "fairy-shooting",
    title: "妖精シューティング",
    shortDescription: "大学3年生の時に作った2Dシューティングゲーム第2弾",
    description: "細かい演出にこだわりました。powerと得点アイテムを実装し、KeyConfigは廃止しました。",
    controls:[
      {key: "矢印キー", action: "キャラクターの移動" },
      {key: "Z", action: "弾の発射" },
      {key: "Shift", action: "低速移動" },
      {key: "X", action: "ボム" }
    ],
    thumbnailUrl: "/images/fairy-shooting/fairy-shooting-thumb.png",
    previewUrl: ["",],
    gameUrl: "/games/fairy-shooting/index.html",
  }
];