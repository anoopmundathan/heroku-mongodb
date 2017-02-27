'use strict';

var http = require('http');
var mongoose = require('mongoose');

var port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foobar');

var Post = mongoose.model('Post', { title: String });
var post = new Post({ title: "My Blog" });

post.save(function(err) {
	if (err) {
		console.log(err);
	}
	console.log('Saved');
});

http.createServer(function(req, res) {
	Post.find(function(err, posts) {
		if (err) return console.log(err);
		console.log(posts);
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(posts));
	});

}).listen(port, function() {
	console.log('Server running at port');
});