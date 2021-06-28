## なぜ、大規模サービスの開発に設計が必要なのか？

<br />

**設計していないとデメリットが多い..**

- 改修が複雑になりやすいため開発工数が増加する<br>
- 破綻すると技術的負債の蓄積速度が上がる<br>
- バグが起こりやすい<br>
- カスタマイズ性が低下しやすい<br>
- 現場メンバーの心理的安全性が低下しやすい<br>
- プロダクトの品質が悪いと採用を考えている応募者に魅力的な企業に見えない<br>
- リクエスト数が上がり表示速度が低下しやすい<br>
- 煩雑なタグの状態はSEOのマイナス要因になる<br>
- CROの施策に影響が出る<br>
- 表示速度が低下して、直帰率が上がりやすい

<br />

**長い目で見れば..**

サービスの視点だけではなく、
開発者視点になることも重要ということです。

<br />

**つまり..？**

サイトの初期設計は売上の土台となる重要なパートであり<br />
長く運用していくサイトでは最低限の設計をしておくべき:star:

<br />

**利用方法**

1.ソースコードをgithubから`git clone`<br>
2.root直下で`npm install`

<br />

---

<br />

## HTML 設計（EJS）

**各パーツの役割**
| ファイル名 | 詳細ディレクトリ | 役割 |
| -------- | -------- | -------- |
| meta.ejs | module | meta情報 |
| common.ejs | module | 共通 |
| header.ejs | module | ヘッダー |
| footer.ejs | module | フッター |
| sidebar.ejs | module | サイドバー |

※ テンプレートエンジンはお好みで変更

<br />

## CSS 設計（FLOCSS）

**各レイヤーの役割**
| 接頭辞 | レイヤー | 詳細ディレクトリ | 役割 |例 |
| -------- | -------- | -------- | -------- | -------- |
| - | **Foundation**    | -     | 土台     | リセット、ベース     |
| **.l-** | **Layout**     | -     | レイアウト     | サイドバー、ヘッダー    |
| **.c-** | Object     | **component**     | 再利用可能なコンポーネント     | ボタン、タイトル等   |
| **.p-**| Object     | **projqct**      | componentの組み合わせ     | ヘッダー、フッダー等   |
| - | Object    | **page**     | ページ毎    | トップページ、マイページ     |
| **.u-** **.is-** | Object    | **Utility**    | 便利クラス、状態クラス     | SP非表示、ボタンON状態等     |

<br />

## JS 設計（ECMAScript 2015）
Babelでのトランスパイル<br />
クラス、メソッドをしっかり分ける<br />
クラスの継承を心掛ける<br />
[ES2015 チートシート](https://qiita.com/morrr/items/883cb902ccda37e840bc)<br />

**継承**
```
<呼び出し元>

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  profile() {
    console.log(this.name + "です。" + this.age + "歳です。");
  }
}

class Child extends Parent {
  constructor(name) {
    super(name, 31);
  }
}

export {Child};

```

```

<呼び出し先>

import {Child} from './module/Parent';

let profile = new Child("太郎");
profile.profile();

```

<br />

## ディレクトリ構成

```
root
├── _src
│  　├── html →                       ページ毎（xxxx.ejs） 
│  　│     └── module →               パーツ毎にファイル分け 
│  　├── js →                         ページ毎（jQueryの場合利用）
│  　├── es →                         ページ毎
│  　│     └── module →               クラス毎にファイル分け（クラス名.js） 
│  　├── scss 
│  　│  　 　├── foundation →         土台（base.scss）、リセット（reset.scss）
│  　│  　 　├── layout →             レイアウト（l-xxxx.scss）
│  　│  　 　├── object 
│  　│  　 　│  　   　├── component → サイト内で3回以上使われる最小限パーツ（c-xxxx.scss）
│  　│  　 　│  　   　├── project →   サイト内で3回以上使われるcomponentの組み合わせ（p-xxxx.scss）
│  　│  　 　│  　   　├── utility →   ユーティリティ（u-xxxx.scss）
│  　│  　 　│  　   　└── page    →   ページ毎（xxxx.scss）
│  　│  　 　│
│  　│  　 　├── import →             変数（_variables.scss）、関数（_mixin.scss）
│  　│  　 　└── export →             出力用
│  　│
│  　└── img →                        ページ毎
│
│　↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
│　↓↓↓↓↓↓↓ ファイルを更新するとsrc配下に自動ビルド ↓↓↓↓↓↓↓↓↓
│　↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
│
├── src
│   　├── html →                     xxxx.html
│   　├── css →                      xxxx.min.css
│   　├── js →                       xxxx.js
│   　├── img →                      xxxx_zz.png, yyyy_zz.svg（圧縮済）
│   　└── lib →                      jQuery等 ライブラリ関連
│
│　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
│　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
│
├── gulpfile.js →                    ビルド処理本体
├── pacage.json →                    パッケージマネージャー
├── pacage-lock.json →               npm install時に完全に同じ環境を構築するため
├── .babelrc →                     　babel設定
├── .editorconfig →                  エディタ設定
└── .gitignore →                     gitで無視するリスト
```

<br />

### レイヤーの読み込み順序（export 配下にファイルがあります）

```

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
@import "./../object/project/*.scss";
@import "./../object/page/top.scss";

////////// utility層 //////////
////////// 便利なスタイル
@import "./../utility/*.scss";

```
> 土台(foundation) → レイアウト(layout) → パーツ(object) → 便利クラス(utility)の順
<br />

## CSS 命名規則

**クラス**<br />
Block__Element--Modifier（MindBEMding）<br />
[BEM チートシート](https://9elements.com/bem-cheat-sheet/)

**ファイル**<br>
`上部ディレクトリ構成`参照

<br />

## JS 命名規則

**クラス**<br />
キャメルケース<br />
単語は省略しない<br />

**ファイル**<br>
`/_src/js/{ページタイトル}.js`

<br />

## Img 命名規則

**ファイル**<br>
`/_src/img/{Block名}_xx.png`<br />
※ xxは上から連番、{Block名}は **c-sample** みたいなやつ

<br />

## ビルド環境

<br />

**やってること**<br />

01.ejsのコンパイル<br />
02.scssのコンパイル<br />
03.cssのコード圧縮<br />
04.cssのブラウザ対応<br />
05.cssプロパティの整頓<br />
06.cssファイルのバンドル<br />
07.cssメディアクエリのバンドル<br />
08.ES2015のコンパイル<br />
09.jsのコード圧縮<br />
10.imgの圧縮<br />
11.全ファイルの監視<br />
12.ライブリロード(ブラウザの自動更新)<br />

<br />

**gulpfile.js**（プロジェクトに合わせてWebpack等でも可）<br />

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
const babel = require("gulp-babel");
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const ejs = require("gulp-ejs");
const cssPlugin = [
  autoprefixer({cascade: false}),
  cssDeclarationSorter({order: 'smacss'}),
  mqpacker()
];
const fileNameList = [
  'top',
  'contact'
]

/*---------- directory ----------*/
const editDirectory = {
  ejs: './_src/html/**/',
  scss: './_src/scss/**/',
  js: './_src/js/',
  es: './_src/es/',
  img: './_src/img/'
}
const destDirectory = {
  ejs: './src/html/',
  css: './src/css/diff/',
  minifyCss: './src/css/',
  js: './src/js/',
  img: './src/img/'
}

/*---------- ejs ----------*/
gulp.task("js.ejs", function(done) {
  gulp.src([editDirectory.ejs + '*.ejs', '!./_src/html/module/*.ejs'])
  .pipe(ejs())
  .pipe(rename({extname: '.html'}))
  .pipe(gulp.dest(destDirectory.ejs));
  done();
 });

/*---------- scss ----------*/
gulp.task('css.compile', function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(gulp.dest(destDirectory.css));
});
gulp.task('css.minify', function () {
  return gulp.src('./_src/scss/export/*.scss')
  .pipe(bulkSass())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss(cssPlugin))
  .pipe(cleancss())
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest(destDirectory.minifyCss));
});

/*---------- js ----------*/
gulp.task('js.browserify', function(done) {
  for(let i=0; i<fileNameList.length; i++){
 　browserify([editDirectory.es + fileNameList[i] + '.js'] , {debug: true})
    .transform(babelify)
    .bundle()
    .on("error", function(err){console.log("Error : " + err.message);})
    .pipe(source(fileNameList[i] + '.js'))
    .pipe(gulp.dest(destDirectory.js))
  }
   done();
});
// gulp.task('js.minify', function() {
//   return gulp.src(editDirectory.js + '*.js')
//   .pipe(plumber())
//   .pipe(uglify({output: {comments: 'some'}}))
//   .pipe(rename({extname: '.min.js'}))
//   .pipe(gulp.dest(destDirectory.js));
// });

/*---------- img ----------*/
gulp.task('img.minify', function(done) {
  gulp.src([editDirectory.img + '*.png', editDirectory.img + '*.jpg'])
  .pipe(imagemin([pngquant({quality: [0.6, 0.9]})]))
  .pipe(gulp.dest(destDirectory.img)),
  gulp.src(editDirectory.img + '*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest(destDirectory.img));
  done();
});

/*---------- sync ----------*/
gulp.task('browser.sync', function(done) {
  browserSync.init({
    server : {baseDir : './src/html/', index : 'top.html'}
  });
  done();
});

/*---------- reload ----------*/
gulp.task('browser.reload', function(done) {
  browserSync.reload();
  done();
});

/*---------- watch ----------*/
gulp.task('files.watch', function(done) {
  gulp.watch([editDirectory.ejs + '*.html'], gulp.series('browser.reload'));
  gulp.watch([editDirectory.ejs + '*.js'], gulp.series('js.ejs'));
  gulp.watch([editDirectory.scss + '*.scss', './_src/scss/*.scss'], gulp.series('css.compile', 'css.minify',  'browser.reload'));
  gulp.watch([editDirectory.es + '*.js'], gulp.series('js.browserify', 'browser.reload'));
  gulp.watch([editDirectory.img + '*.png', editDirectory.img + '*.jpg', editDirectory.img + '*.svg'], gulp.series('img.minify', 'browser.reload'));
  // gulp.watch([editDirectory.js + '*.js'], gulp.series('js.minify', 'browser.reload'));
  done();
});

/*---------- default ----------*/
gulp.task('default', gulp.series('js.ejs', 'css.compile', 'css.minify', 'js.browserify',
  gulp.parallel('files.watch', 'browser.sync'), function(done) {
    done();
  })
);
```
