var nodemon = require('gulp-nodemon');

module.exports = {
    serve: function(){
        nodemon({
            script: './server/app.js',
            ext: 'js html jsx',
            ignore: ['bundle.js', 'style.css']
        })
        .on('change', ['js', 'less'])
        .on('restart', function(){
          console.log("restarted!");
        });
    },
    vmserve: function(){
        nodemon({
            script: './server/app.js',
            ext: 'js html jsx',
            ignore: ['bundle.js', 'style.css'],
            env: { 'NODE_ENV': 'vmdev' }
        })
        .on('change', ['js', 'less'])
        .on('restart', function(){
          console.log("restarted!");
        });
    }
};
