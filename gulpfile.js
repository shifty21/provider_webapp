var gulp 			= require('gulp');
var clean 			= require('gulp-clean');
var concat 			= require('gulp-concat');
var ngdocs 			= require('gulp-ngdocs');
var sass 			= require('gulp-sass');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');
var minifyHtml 		= require('gulp-htmlmin');
var ngTemplate 		= require('gulp-ng-template');

var buildDir 		= 'bin/';
var depsJS 			= ['bower_components/jquery/dist/jquery.js',
						'bower_components/angular/angular.js',
						'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
						'bower_components/angular-route/angular-route.js',
						'bower_components/angular-ui-router/release/angular-ui-router.js'
						];
var appJS 			= ['app/resources/js/general/app.js',
						'app/resources/js/general/modules.js',
						'app/resources/js/general/configs.js',
						'app/resources/js/general/MetaService.js',
						'app/resources/js/home/*.js',
						'app/resources/js/loginState/*.js',
						'app/resources/js/user/*.js',,
						'app/resources/js/services/*.js',
						];

/** tasks **/
gulp.task('devDeps', function ()
{
	var depsjs = gulp.src(depsJS);
	return depsjs.pipe(concat('mcu_deps.js'))
		.pipe(gulp.dest('app'));
});

gulp.task('devJS', function ()
{
	var js = gulp.src(appJS);
	return js.pipe(concat('mcu.js'))
		.pipe(gulp.dest('app'));
});

/** sass tasks **/
gulp.task('sass', function ()
{
	return gulp.src(['app/resources/css/main.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/resources/css'));
});

gulp.task('devCSS', function ()
{
	return gulp.src(['app/resources/css/main.scss'])
		.pipe(concat('mcu.css'))
		.pipe(gulp.dest('app'));
});

gulp.task('buildStyles', function (callback)
{
	runSequence('sass', 'devCSS', callback);
});

/** template cache **/

gulp.task('templates',function(){
	gulp.src('app/partials/**/*.html')
	.pipe(minifyHtml({empty:true,quotes:true})
	.pipe(ngTemplate({
		moduleName: 'hk',
		filePath: 'template.js'
	})))
	.pipe(gulp.dest('app/'));
})

/** initialize **/
gulp.task('default',['watch'], function (callback)
{
	runSequence('devDeps', 'devJS','devCSS','templates', callback);
});



/** watch **/
gulp.task('watch', function ()
{
	gulp.watch('app/resources/**/*.js', ['devJS']);
	gulp.watch('app/resources/**/*.scss', ['buildStyles']);
	gulp.watch('app/partials/**/*.scss', ['templates']);
});