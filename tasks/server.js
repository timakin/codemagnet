var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var browserify = require('browserify');
var reactify = require('reactify');
var sync = require('browser-sync');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var minify = require('gulp-minify-css');
var connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var confPath = require('../config.json').paths;

module.exports = {
    serve: function(){
        nodemon({
            script: './server/app.js',
            ext: 'js html jsx'
        })
        .on('change', function(){
          console.log("changed");
        })
        .on('restart', function(){
          console.log("restarted!");
        });
    }
};