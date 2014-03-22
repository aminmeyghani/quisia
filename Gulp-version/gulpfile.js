var path = require('path');
var Combine = require('stream-combiner');
var connect = require('gulp-connect');
var docco = require("gulp-docco");
var gulp = require("gulp");
var g = require("gulp-load-plugins")();
// var escape = require('escape-html');
var app  = {
	devPath : './dev/',
	lessRoot : './dev/less/',
	buildPath : './dist/',
	docPath : './dev/doc/'
};

function handleError(err) {
  console.log(err.toString() + "eeeexxx");
  this.emit('end');
}


var jsdoc = require("gulp-jsdoc");



  gulp.task("js-docs", function(){
  	return gulp.src("dev/jsdocs/*.js")
  .pipe(jsdoc('dev/jsdoc-output'))
  });

  var todo = require('gulp-todo');

gulp.task('todos', function() {
    return gulp.src('dev/todo/**/*.js')
        .pipe(todo()).on("error", handleError)
        .pipe(gulp.dest('dev/todo-output'));
});

/* docco */

  gulp.task("docco", function(){
  	return gulp.src("dev/docco/**/*")
  .pipe(docco())
  .pipe(gulp.dest('dev/docco-out'))
  .pipe(connect.reload());
  });

  gulp.task('watch-docco', function () {
  	gulp.watch('dev/docco/*.js', ['docco']);
  });

  gulp.task('connect-docco', connect.server({
    root: ['dev/docco'],
    port: 1337,
    livereload: true,
    open: {
      browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome'
    }
  }));
  gulp.task('docco-edit', ['connect-docco', 'docco', 'watch-docco']);



/* LESS Tasks */
//--------------

gulp.task("_less", function(){
	return gulp.src(app.lessRoot+'app.less')
	.pipe(g.less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
	.pipe(g.autoprefixer("ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"))
	.pipe(gulp.dest(app.buildPath+'css'))
	.pipe(g.cssmin({keepBreaks : true}))
	.pipe(gulp.dest(app.buildPath+'css/'));
});
gulp.task('less-dist',['_less'], function () {
	return gulp.src(app.buildPath+'css/app.css')
	.pipe(g.cssmin())
	.pipe(g.rename({suffix: '.min'}))
	.pipe(gulp.dest(app.buildPath+'css'));
});
gulp.task("less-dev", function(){
	return gulp.src(app.lessRoot+'app.less')
	.pipe(g.less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
	.on("error", handleError)
	.pipe(g.autoprefixer("ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"))
	.pipe(g.rename({suffix: '.dev'}))
	.pipe(gulp.dest('./dev/css/'))
	.pipe(connect.reload());
});
/* Docs */
//--------------
gulp.task("doc-concat", ['less-dev'], function(){
	return gulp.src(app.lessRoot+"**/*.less")
  //more optinos:
  //https://github.com/cbou/markdox
	.pipe(g.markdox())
	.pipe(g.concat("less-shell.md"))
	.pipe(gulp.dest(app.docPath))
	.pipe(connect.reload());
});
// Rename each file:
// http://stackoverflow.com/questions/22123958/failing-to-get-updated-contents-of-a-file-after-gulp-stream-completes
gulp.task("doc", function(){
	return gulp.src(app.lessRoot+"**/*.less")
  // https://github.com/cbou/markdox
	.pipe(g.markdox())
	.pipe(g.rename({extname: '.md'}))
	.pipe(gulp.dest(app.docPath+"all"))
	.pipe(connect.reload());
});
gulp.task('doc-copy',['doc','doc-concat'], function() {
	return gulp.src(app.docPath+'**/', {base: app.docPath})
	.pipe(gulp.dest(app.buildPath+'/doc/'));
});
gulp.task('watch-less', function () {
	gulp.watch(app.lessRoot+'*.less', ['less-dev']);
});
gulp.task('default', ['less-all','doc-all']);
gulp.task('less-all', ['less-dist','less-dev']);
gulp.task('doc-all', ['doc','doc-concat']);
/* Connect + livereload */
//-------------
gulp.task('connect', connect.server({
  root: ['dev'],
  port: 1337,
  livereload: true,
  open: {
    browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome'
  }
}));
gulp.task('html', function () {
  return gulp.src(app.devPath+'**/*.html')
    .pipe(connect.reload());
});
gulp.task('watch-connect', function () {
  gulp.watch([app.devPath+'**/*.html',app.devPath+'*.html'], ['html']);
  gulp.watch([app.devPath+'less/**/*.less',app.devPath+'less/*.less'], ['doc-all']);
  
  gulp.watch([app.devPath+'doc/**/*.md',app.devPath+'doc/*.md'], ['md-html']);
});
gulp.task('connect-all', ['connect', 'less-dev', 'doc-concat', 'doc', 'md-html', 'watch-connect']);
/* Convert markdown to html */
//--------------------------
gulp.task('md-html', function () {
   return gulp.src('./dev/doc/**/*.md')
        .pipe(g.markdown())
        .pipe(gulp.dest('./dev/pages'))
        .pipe(connect.reload());
});