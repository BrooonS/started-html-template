# Started HTML Template
Started HTML Template with SASS and Gulp.

## What is that?

With this template you can forget about routine matters which you do every time. In this template include Gulp which optimizes your images, assemble the project into one folder and converts SASS to CSS. Also this template optimizes the images and minify your main CSS and JS files.

If you want, you can put the add vendor prefixes to CSS files, and convert your JavaScript code to old standards (ES6) for older browsers, such as IE9.

## How to use?

Before you begin you must have installed the latest version [node.js]

 1. Download this repository
 2. Unzip on some folder
 3. Open command line
 4. Write `npm i` to install main plugins
 5. Run gulp with command `gulp default`

### File location

 - You can **add any scripts and css styles** intro js and css folder. After the build they will be transported to the dist folder.
 - If file style.scss you will not be enough, you can **add any other sass or scss file** in the SASS folder, it will be compiled, reduced and transferred to the dist folder.
 - Upload any fonts to `fonts` folder.
 - All **images** which was uploded in `img` folder, will be compiled, reduced and transferred to the dist folder.

### Other

#### Add vendor prefixes

 - Uncomment `autoprefixer` on line 28-31
 - After uncomment autoprefixer adds where you need vendor prefixes.

#### Converting JavaScript to ES6

 - Uncomment `babel` on line 44-46
 - Plugin it will process your code and rewrite it for old browsers.

**Commands**
 - `gulp clean` to delete `dist` folder
 - `gulp build` to compilate your project in `dist` folder

## Author
@BrooonS

## Licence MIT
Copyright (c) 2017

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
