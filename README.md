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
root
├── _src
│  　├── img →                      ページ毎
│  　├── js →                       ページ毎、全ページ共通js（global.js）
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
│   　├── js →                       XXXX.min.js, global.min.js（共通js）
│   　├── css →                      XXXX.min.css
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

1.ソースコードをgithubから`clone`<br>
2.root直下で`npm install`

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

**css**<br>
`上部ディレクトリ構成`参照

**Javascript**<br>
`/_src/js/page/{ページタイトル}.js`

**img**<br>
`/_src/img/{Block名}_XX.png`

※ XXは上から連番、{Block名}は **c-sample** みたいなやつ

## HTML

利用するテンプレートエンジンに合わせて`top.html`を改修
ejs、Twigの場合、下記のタスクランナーで対応可能。

## タスクランナー

**gulp**（プロジェクトに合わせてWebpack等でも可）

```
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');
const cssDeclarationSorter = require('css-declaration-sorter');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const bulkSass = require('gulp-sass-bulk-import');
const browserSync = require('browser-sync'); 
const cssPlugin = [
  autoprefixer({cascade: false}),
  cssDeclarationSorter({order: 'smacss'}),
  mqpacker()
];

/*---------- directory ----------*/
const editDirectory = {
  html: './',
  scss: './_src/scss/**/',
  js: './_src/js/',
  img: './_src/img/'
}
const destDirectory = {
  css: './src/css/diff/',
  minifyCss: './src/css/',
  js: './src/js/',
  img: './src/img/'
}

/*---------- scss圧縮 ----------*/
gulp.task("css.compile", function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(gulp.dest(destDirectory.css));
});
gulp.task("css.minify", function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(cleancss())
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest(destDirectory.minifyCss));
});

/*---------- js圧縮 ----------*/
gulp.task('js.minify', function() {
  return gulp.src(editDirectory.js + '*.js')
  .pipe(plumber())
  .pipe(uglify({output: {comments: 'some'}}))
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest(destDirectory.js));
});

/*---------- img圧縮 ----------*/
gulp.task('img.minify', function() {
  gulp.src([editDirectory.img + '*.png', editDirectory.img + '*.jpg'])
  .pipe(imagemin([pngquant({quality: [0.6, 0.9]})]))
  .pipe(gulp.dest(destDirectory.img)),
  gulp.src(editDirectory.img + '*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest(destDirectory.img));
});

/*---------- browser同期 ----------*/
gulp.task('browser.sync', function(done) {
  browserSync.init({
      server : {baseDir : './', index : 'top.html'}
  });
  done();
});

/*---------- browser更新 ----------*/
gulp.task('browser.reload', function(done) {
  browserSync.reload();
  done();
});

/*---------- files監視 ----------*/
gulp.task('files.watch', function(done) {
  gulp.watch([editDirectory.html + '*.html'], gulp.series('browser.reload'));
  gulp.watch([editDirectory.scss + '*.scss', './_src/scss/*.scss'], gulp.series('css.compile', 'css.minify',  'browser.reload'));
  gulp.watch([editDirectory.js + '*.js'], gulp.series('js.minify', 'browser.reload'));
  gulp.watch([editDirectory.img + '*.png', editDirectory.img + '*.jpg', editDirectory.img + '*.svg'], gulp.series('img.minify', 'browser.reload'));
  done();
});

/*---------- default ----------*/
gulp.task('default', gulp.series('css.compile', 'css.minify', 'js.minify',
  gulp.parallel('files.watch', 'browser.sync'), function(done) {
    done();
  })
);
```