// intro
//http://www.sitepoint.com/introduction-gulp-js/
//http://travismaynard.com/writing/getting-started-with-gulp
// Explicitly requiring each plugin.
// var gulp = require('gulp');
// var less = require('gulp-less');         //https://github.com/plus3network/gulp-less
var path = require('path');
// var watch = require('gulp-watch');       // https://github.com/floatdrop/gulp-watch
// var cssmin = require('gulp-cssmin');     // https://github.com/chilijung/gulp-cssmin/
// var rename = require('gulp-rename');     // https://github.com/hparra/gulp-rename
// var markdox = require("gulp-markdox");   //https://github.com/cbou/markdox
// var concat = require('gulp-concat');     //https://github.com/wearefractal/gulp-concat
// var es = require('event-stream');
// var prefixer = require('gulp-autoprefixer'); //https://github.com/Metrime/gulp-autoprefixer
// var clean = require('gulp-clean');       //https://github.com/peter-vilja/gulp-clean

var gulp = require("gulp");
var g = require("gulp-load-plugins")();


var app  = {
	lessRoot : './dev/less/'
};

/* LESS Tasks */
//--------------

//TODO conditional compilation ... ? 

//http://onedayitwillmake.com/blog/2013/03/compiling-less-from-a-node-js-script/
// produces app.css without comments, a bit cleaner
gulp.task("_less", function(){
	return gulp.src(app.lessRoot+'app.less')
	.pipe(g.less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
	//http://stackoverflow.com/questions/21025995/gulp-less-not-handling-includes-properly
	.pipe(g.autoprefixer("ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"))
	.pipe(gulp.dest('./public/css'))
	.pipe(g.cssmin({keepBreaks : true}))
	// .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./public/css/'));
});
//http://stackoverflow.com/questions/21638659/gulp-open-task-doesnt-correctly-execute
// runs the _less task and minifies the css.
// less-dist is dependent on the execution of _less.
gulp.task('less-dist',['_less'], function () {
	return gulp.src('./public/css/app.css')
	.pipe(g.cssmin())
	.pipe(g.rename({suffix: '.min'}))
	.pipe(gulp.dest('./public/css'));
});

// produces a dev version of the css with a lot of junk from the docs.
gulp.task("less-dev", function(){
	return gulp.src(app.lessRoot+'app.less')
	.pipe(g.less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
	//http://stackoverflow.com/questions/21025995/gulp-less-not-handling-includes-properly
	.pipe(g.autoprefixer("ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"))
	.pipe(g.rename({suffix: '.dev'}))
	.pipe(gulp.dest('./dev/css/'));
});


/* Docs */
//--------------
gulp.task("doc-concat", function(){
  return gulp.src(app.lessRoot+"*.less")
    .pipe(g.markdox())
    .pipe(g.concat("less-shell.md"))
    .pipe(gulp.dest("./doc"));
});

// Rename each file:
// http://stackoverflow.com/questions/22123958/failing-to-get-updated-contents-of-a-file-after-gulp-stream-completes
gulp.task("doc", function(){
 return gulp.src(app.lessRoot+"*.less")
    .pipe(g.markdox())
    .pipe(g.rename({extname: '.md'}))
    .pipe(gulp.dest("./doc/all"));
});






//http://stackoverflow.com/questions/22082641/gulp-watch-not-tasks-not-firing-in-order
gulp.task('watch', function () {
	gulp.watch(app.lessRoot+'*.less', ['less-dev']);
});


gulp.task('default', ['less-all','doc-all']);
//http://stackoverflow.com/questions/21638659/gulp-open-task-doesnt-correctly-execute
gulp.task('less-all', ['less-dist','less-dev']);
gulp.task('doc-all', ['doc','doc-concat']);


//-------------
//ref

//cleaner
// gulp.task('default', function () {
//     gulp.src('app/tmp', {read: false})
//         .pipe(clean());
// });


//example for renaming all the files
// gulp.task("rename-doc", ['doc'], function(){
//  return gulp.src("./doc/*.less")
//     .pipe(g.rename({extname: '.md'}))
//     .pipe(gulp.dest("./doc"));
// });

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