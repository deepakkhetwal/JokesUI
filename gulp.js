'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');
var paths={
	vendorScripts:['public/javascripts/vendor/angular.js']
	
};

/*
gulp.task('clean', function(){
	return del.sync(['dist/**','!dist']);	
});
*/

gulp.task('vendorScripts', function(){
	return gulp.src(paths.vendorScripts)
				.pipe(uglify())
				.pipe(concat('all-vendor.min.js'))
				.pipe(gulp.dest('dist/js'));
});

/*gulp.task('appScripts', function(){
	return gulp.src(paths.appScripts)
				.pipe(uglify())
				.pipe(concat('all-app.min.js'))
				.pipe(gulp.dest('dist/js'));
});
*/
/*
gulp.task('watch', function(){
	gulp.watch(paths.appScripts,['appScripts']);
	gulp.watch(paths.vendorScripts,['vendorScripts']);	
});
*/
gulp.task('default',['vendorScripts']);






