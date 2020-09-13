## なぜフロントエンドの設計が必要なのか？

**設計していないとデメリットが多い....**

→ 改修が複雑になりやすいため開発工数が増加する<br>
→ 技術負債の蓄積速度が上がる<br>
→ バグが起こりやすい<br>
→ カスタマイズ性が低下しやすい<br>
→ 現場メンバーの心理的安全性が低下しやすい<br>
→ 採用を考えている応募者に魅力的な企業に見えない<br>
→ リクエスト数が上がり表示速度が低下しやすい<br>
→ SEOでの検索順位が上がりずらい<br>
→ ページ離脱率が上がりやすい

**つまり..？**

サイト設計は売上の土台となる重要なパートであり
長く運用していくサイトでは最低限の設計をしておくべき:star:

## CSS 設計（FLOCSSを改良）

**各レイヤーの役割**
| 接頭辞 | レイヤー | 詳細ディレクトリ | 役割 |例 |
| -------- | -------- | -------- | -------- | -------- |
| - | **Foundation**    | -     | 土台     | リセット、ベース     |
| **.l-** | **Layout**     | -     | レイアウト     | サイドバー、ヘッダー    |
| **.c-** | Object     | **component**     | 再利用可能なコンポーネント     | ボタン、タイトル等   |
| **.g-**| Object     | **global**      | 共通パーツ     | ヘッダー、フッダー等   |
| - | Object    | **page**     | ページ毎    | トップページ、マイページ     |
| **.u-** **.is-** | **Utility**     | -     | 便利クラス、状態クラス     | SP非表示、ボタンON状態等     |

> component、globalレイヤーについては <font color="red">**CSSクラス名(.c-more{}) == ファイル名(c-more.scss)**</font> （イコール）
> 
---
**ディレクトリ構成**

```
ROOT
├── _src
│  　├── img →                      ページ毎
│  　├── js →                       ページ毎
│  　└── scss 
│  　  　 　├── export →             出力用
│  　  　 　├── import →             変数（_variables.scss）、関数（_mixin.scss）
│  　  　 　├── foundation →         土台（base.scss）、リセット（reset.scss）
│  　  　 　├── layout →             レイアウト（l-XXXX.scss）
│  　  　 　├── utility →            ユーティリティ（u-XXXX.scss）
│  　  　 　└── object 
│  　  　 　  　   　├── component → 共通パーツ（サイト内で３回以上使われるボタンなど）
│  　  　 　  　   　├── global →    共通パーツ（全ページで使われるヘッダー等）
│  　  　 　  　   　└── page →      ページ毎
│
│　↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
│　↓↓↓↓↓↓↓ ファイルを更新するとsrc配下に自動ビルド ↓↓↓↓↓↓↓↓↓
│　↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
│
├── src
│   　├── img →                      XXXX_00.png, YYYY_00.svg（圧縮済）
│   　├── js →                       XXXX.min.js, YYYY.min.js
│   　├── css →                      XXXX.min.css, YYYY.min.css
│   　└── lib →                      jQuery等 ライブラリ関連
│
│　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
│　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
│
├── gulpfile.js →                    ビルド処理本体
├── pacage.json →                    パッケージマネージャー
├── pacage-lock.json →               npm install時に完全に同じ環境を構築するため
└── top.html →                       初期HTML
```

---

**利用方法**

1.ソースコードをgitHubから`clone`<br>
2.ROOT直下で`npm install`

---

**レイヤーの読み込み順序（export 配下にファイルがあります）**

```:\_src\scss\export\top.scss

////////// foundation層 //////////
////////// 土台となるスタイル
@import "./../foundation/reset.scss";
@import "./../foundation/base.scss";

////////// layout層 //////////
////////// レイアウトを決めるスタイル
@import "./../layout/*.scss";

////////// object層 //////////
////////// 共通パーツのスタイル
@import "./../object/component/*.scss";
@import "./../object/global/*.scss";
@import "./../object/page/top_pc.scss";
@import "./../object/page/top_sp.scss";

////////// utility層 //////////
////////// 便利なスタイル
@import "./../utility/*.scss";
```
> Foundation → Layout → Object → Utility
> | 土台 → レイアウト → パーツ → 便利クラスの順

## CSSクラス名 命名規則（MindBEMding）
[BEMのチートシート](https://9elements.com/bem-cheat-sheet/)

> BEM（Block Element Modifier）。
> 上記URLはBEMのチートシートです。

## ファイル名 命名規則

**css**
`上部ディレクトリ構成`参照

**Javascript**
`/_src/js/page/{ページタイトル}.js`

**img**
`/_src/img/{Block名}_XX.png`

※ XXは上から連番、{Block名}は **c-sample** みたいなやつ

