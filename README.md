# Portfolio Website - Mobile Version

モバイル版ポートフォリオサイト（Figmaデザイン完全再現）

## 必要な画像アセット

以下の画像をFigmaからダウンロードして、`assets/images/` フォルダに配置してください：

### Hero Section
- `background.png` - ヒーローセクションの背景画像
- `profile.png` - プロフィール画像

### Icons (SVG推奨)
- ロゴ (ナビゲーション用)
- メールアイコン
- GitHubアイコン
- LinkedInアイコン

### Services Section
- `design-icon.png` - デザインサービスのアイコン
- `development-icon.png` - 開発サービスのアイコン
- `maintenance-icon.png` - メンテナンスサービスのアイコン

### Skills Section
- `html5-icon.svg` - HTML5ロゴ
- `css3-icon.svg` - CSS3ロゴ
- `sass-icon.svg` - Sassロゴ

### Portfolio Section
- `portfolio-header.jpg` - ポートフォリオセクションのヘッダー背景
- `project-eatsome.jpg` - eatsomeプロジェクトの画像
- `project-2.jpg` - プロジェクト2の画像
- `project-3.jpg` - プロジェクト3の画像

### Other
- `separator-black.png` - 黒いセパレーター画像

## Figmaデザイン参照

### ファーストビュー (Hero Section)
Node ID: 43-44
https://www.figma.com/design/di6jNXBtjG3h6iShu2AZop/Portfolio---Tomasz-Gajda--Community-?node-id=43-44

### フルページ (全セクション)
Node ID: 1-340
https://www.figma.com/design/di6jNXBtjG3h6iShu2AZop/Portfolio---Tomasz-Gajda--Community-?node-id=1-340

## フォント

以下のGoogle Fontsを使用しています（index.htmlに既に含まれています）：

- Raleway (700, 800)
- Montserrat (400, 600, 700, 800)
- Open Sans (300, 400)
- Varela
- Advent Pro
- Nunito (400, 700)

## 構造

```
Official-Kousai/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # スタイルシート
├── assets/
│   └── images/         # 画像ファイル（Figmaから取得）
├── js/                 # JavaScriptファイル（将来的に使用）
└── README.md           # このファイル
```

## セクション構成

1. **Hero Section** - ファーストビュー、プロフィール画像、ソーシャルリンク
2. **IT Berries Section** - プロジェクト紹介
3. **About Section** - 自己紹介、サービス一覧、スキル
4. **Portfolio Section** - プロジェクト一覧とフィルター
5. **Contact Section** - お問い合わせフォーム
6. **Footer** - コピーライト、ソーシャルリンク

## デザイン仕様

- モバイル幅: 375px
- デザインはFigmaデザインを完全に再現
- レスポンシブ対応（モバイルファースト）

## 次のステップ

1. Figmaから画像アセットをダウンロード
2. `assets/images/` フォルダに画像を配置
3. SVGアイコンをHTMLに追加
4. ブラウザでプレビューして調整

## 注意事項

- このバージョンはモバイル版のみです
- デスクトップ版は別途実装予定
- 画像はFigmaのローカルホストサーバーから取得する必要があります
