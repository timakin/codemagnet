'use strict'


var Post = require('../controller/post.model.js');

module.exports = function(){
    Post.create({
        code: "test/code/dir/test.js",
        description: "this is awesome code :)",
        section: "{'docText': 'codeText'}"
    }, function(){
        console.log("Post seeds are created.");
    });
};
