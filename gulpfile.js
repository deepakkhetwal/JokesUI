'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');
var paths={
	vendorScripts:['bower_components/angular/angular.min.js','bower_components/angular-ui-router/release/angular-ui-router.min.js'],
	appScripts:['app/**/*.js']
};


gulp.task('clean', function(){
	return del.sync(['dist/**','!dist']);	
});


gulp.task('vendorScripts',['clean'], function(){
	return gulp.src(paths.vendorScripts)
				.pipe(concat('all-vendor.min.js'))
				.pipe(gulp.dest('dist/app'));
});

gulp.task('appScripts',['clean'], function(){
	return gulp.src(paths.appScripts)
				.pipe(uglify())
				.pipe(concat('all-app.min.app'))
				.pipe(gulp.dest('dist/app'));
});


gulp.task('watch', function(){
	gulp.watch(paths.appScripts,['appScripts']);
	gulp.watch(paths.vendorScripts,['vendorScripts']);	
});

gulp.task('default',['watch','vendorScripts','appScripts']);






