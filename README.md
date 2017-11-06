# Started HTML Template
Started HTML Template with SASS and Gulp.

## What is that?

With this template you can forget about routine matters which you do every time. In this template include Gulp which optimizes your images, assemble the project into one folder and converts SASS to CSS. Also this template optimizes the images and minify your main CSS and JS files.

If you want, you can put the add vendor prefixes to CSS files, and convert your JavaScript code to old standards (ES6) for older browsers, such as IE9.

## How to use?

Before you begin you must have installed the latest version [node.js](https://nodejs.org/).

 1. Download this repository
 2. Unzip on some folder
 3. Open command line
 4. Write `npm i` to install main plugins
 5. Run gulp with command `gulp`

### File location

 - You can **add any scripts and css styles** intro js and css folder. After the build they will be transported to the dist folder.
 - If file style.scss you will not be enough, you can **add any other sass or scss file** in the SASS folder, it will be compiled, reduced and transferred to the dist folder. **Note**: compiled will be to `file_name.min.css`.
 - Upload any fonts to `fonts` folder.
 - All **images** which was uploded in `img` folder, will be compiled, reduced and transferred to the dist folder.

### Other

#### Support old browsers

 - On line 29: change const `supported` to `true`
 - After change: autoprefixer and babel will be supported old browsers.

#### Commands
 - `gulp build` to compilate your project in `dist` folder. **Note**: before building, `dist` folder will be removed.

## Author
@BrooonS

## Licence
[MIT licence](https://github.com/BrooonS/Started-HTML-Template/blob/master/LICENSE).