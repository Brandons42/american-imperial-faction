const { dest, parallel, series, src, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const deploy = () => src('./dist/**/*').pipe(ghPages());

const images = () =>
	src('./images/*').pipe(imagemin()).pipe(dest('./dist/images/'));

const markup = () => src('./index.html').pipe(htmlmin()).pipe(dest('./dist/'));

const scripts = () => src('./index.js').pipe(uglify()).pipe(dest('./dist/'));

const styles = () => src('./index.css').pipe(cleanCSS()).pipe(dest('./dist/'));

const videos = () => src('./videos/*').pipe(dest('./dist/videos/'));

const build = parallel(images, markup, scripts, styles, videos);

exports.default = build;

exports.deploy = series(build, deploy);

exports.dev = () => {
	watch('./images/*', images);
	watch('./index.html', markup);
	watch('./index.js', scripts);
	watch('./index.css', styles);
	watch('./videos/*', videos);
};
