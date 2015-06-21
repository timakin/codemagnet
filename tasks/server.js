var nodemon = require('gulp-nodemon');

module.exports = {
    serve: function(){
        nodemon({
            script: './server/app.js',
            ext: 'js html jsx',
            ignore: ['bundle.js', 'style.css']
        })
        .on('change', ['jsx', 'less'])
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
        .on('change', ['jsx', 'less'])
        .on('restart', function(){
          console.log("restarted!");
        });
    }
};
