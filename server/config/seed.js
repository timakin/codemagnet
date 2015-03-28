'use strict'


var Post = require('../controller/post.model.js');

module.exports = function(){
    Post.find({}).remove(function() {
        Post.create({
            code: "test/code/dir/test.js",
            description: "this is awesome code :)",
            section: "{'docText': 'codeText'}"
        }, {
            code: "test/code/dir/test2.js",
            description: "this is :)",
            section: "{'docText': 'codeText'}"
        }, function () {
            console.log("Post seeds are created.");
        });
    });
};
