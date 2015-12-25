'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var sourcePaths={
	vendorScripts:[
		'./bower_components/jquery/dist/jquery.min.js',
		'./bower_components/angular/angular.min.js',
		'./bower_components/angular-resource/angular-resource.min.js',
		'./bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'./bower_components/bootstrap/dist/js/bootstrap.min.js',
		'./bower_components/toastr/toastr.min.js'

	],
	appScripts:['./app/**/*.js'],
	vendorCss:['./bower_components/bootstrap/dist/css/bootstrap.min.css',
		'./bower_components/toastr/toastr.min.css'],
	appViews:['./app/**/*.html'],
	images: ['./public/images/*.*'],
	binScripts:['./bin/**/*'],
	rootScripts:['./app.js','./app-config.js'],
	npm: ['./node_modules/**/*']

};

var distPaths = {
	scripts : './dist/js',
	css : './dist/content/css',
	images: './dist/content/images',
	bin: './dist/bin',
	root: './dist',
	views: './dist/views',
	npm: './dist/node_modules'
};

gulp.task('clean', function(){
	return del.sync(
		['./dist/content/css/**'
			,'!./dist/content/css'
			,'./dist/content/images/**'
			,'!./dist/content/images'
			,'./dist/js/**',
			,'!./dist/js'
			,'./dist/views/**'
			,'!./dist/views'
			,'./dist/bin/**/*'//,
			//,'./dist/node_modules/*'
		]);
});

gulp.task('vendorScripts',['clean'], function(){
	return gulp.src(sourcePaths.vendorScripts)
				.pipe(concat('all-vendor-script.min.js'))
				.pipe(gulp.dest(distPaths.scripts));
});

gulp.task('appScripts',['clean'], function(){
	return gulp.src(sourcePaths.appScripts)
				.pipe(jshint())
				.pipe(jshint.reporter('default'))
				//.pipe(uglify())
				.pipe(concat('all-app.min.js'))
				.pipe(gulp.dest(distPaths.scripts));
});

gulp.task('vendorCSS',['clean'],function(){
	return gulp.src(sourcePaths.vendorCss)
		.pipe(concat('all-vendor-css.min.css'))
		.pipe(gulp.dest(distPaths.css));
});

gulp.task('images',['clean'], function(){
	return gulp.src(sourcePaths.images)
		.pipe(gulp.dest(distPaths.images));
});

gulp.task('binScripts',['clean'], function(){
	return gulp.src(sourcePaths.binScripts)
		.pipe(gulp.dest(distPaths.bin));
});

gulp.task('rootScripts',['clean'], function(){
	return gulp.src(sourcePaths.rootScripts)
			.pipe(gulp.dest(distPaths.root));
});

gulp.task('appViews',['clean'], function(){
	return gulp.src(sourcePaths.appViews)
		.pipe(gulp.dest(distPaths.views));
});

/*gulp.task('npm',['clean'], function(){
	return gulp.src(sourcePaths.npm)
		.pipe(gulp.dest(distPaths.npm));
}); */
gulp.task('watch', function(){
	gulp.watch(sourcePaths.appScripts,['default']),
	gulp.watch(sourcePaths.appViews,['default']);
	//gulp.watch(sourcePaths.vendorScripts,['vendorScripts']);
});

gulp.task('default',['watch','vendorScripts','appScripts','vendorCSS','images','binScripts','rootScripts','appViews']);






