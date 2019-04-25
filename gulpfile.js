/* jshint node: true */
const gulp = require("gulp");
const sass = require("gulp-sass");
const sass_importer = require("npm-sass").importer;
const autoprefixer = require("gulp-autoprefixer");

const outputBasedir = "public";

let processSass = () => {
  return gulp.src("src/sass/**/*.scss")
             .pipe(sass({importer: sass_importer})
               .on("error", sass.logError))
             .pipe(autoprefixer({browsers: ["last 2 versions", "ie >= 9"]}))
             .pipe(gulp.dest(outputBasedir + "/css"))
};

const watchSass = () => {
  let sassFilesGlob = "src/sass/**/*.scss";
  return gulp.watch(sassFilesGlob, {ignoreInitial: false}, gulp.series(processSass))
};

exports.default = watchSass;
exports.build = processSass;
