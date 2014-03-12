var gulp = require('gulp');
var less = require('gulp-less');         //https://github.com/plus3network/gulp-less
var path = require('path');
var watch = require('gulp-watch');       // https://github.com/floatdrop/gulp-watch
var cssmin = require('gulp-cssmin');     // https://github.com/chilijung/gulp-cssmin/
var rename = require('gulp-rename');     // https://github.com/hparra/gulp-rename
var markdox = require("gulp-markdox");   //https://github.com/cbou/markdox
var concat = require('gulp-concat');     //https://github.com/wearefractal/gulp-concat
var es = require('event-stream');
var prefixer = require('gulp-autoprefixer'); //https://github.com/Metrime/gulp-autoprefixer





//http://onedayitwillmake.com/blog/2013/03/compiling-less-from-a-node-js-script/
gulp.task("less", function(){
	gulp.src('./less/app.less')
	.pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ], nojs : true}))
	//http://stackoverflow.com/questions/21025995/gulp-less-not-handling-includes-properly
	.pipe(prefixer("ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"))
	.pipe(gulp.dest('./public/css'))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./public/css/'));
});


gulp.task("doc", function(){
  gulp.src("./less/*.less")
    .pipe(markdox())
    .pipe(concat("doc.md"))
    .pipe(gulp.dest("./doc"));
});


//http://stackoverflow.com/questions/22082641/gulp-watch-not-tasks-not-firing-in-order
gulp.task('watch', function () {
	gulp.watch('./less/*.less', ['less']);
});

//ref

// Stanalone cssmin
// gulp.task('cssmin',['less'], function () {
// 	gulp.src('./public/css/app.css')
// 	.pipe(cssmin())
// 	.pipe(rename({suffix: '.min'}))
// 	.pipe(gulp.dest('./public/css/'));
// });



// More involved Watch
// gulp.task('watch-less', function() {
// 	gulp.src('./less/**/*.less')
// 	.pipe(watch(function(files) {
// 		return files.pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
// 		.pipe(gulp.dest('./public/css'));
// 	}));
// });


//http://stackoverflow.com/questions/21944216/chain-sequential-tasks
// function doc () {
// 	return gulp.src("./src/*.less")
// 	.pipe(markdox())
// 	.pipe(gulp.dest('./doc/')) ;
// }


// gulp.task('build-doc', function () {
// 	return es.merge(doc())
// 	gulp.src('./doc/*.less')
// 	.pipe(concat('all.md'))
// 	.pipe(gulp.dest('./doc/'))
// });