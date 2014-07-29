var express = require("express"),
	db = require("./models/index.js"),
	app = express();

	app.set("view engine", "ejs");
	app.get("/blogposts", function(req, res){

		db.post.findAll().success(function(posts){
			res.render('index', {post: posts});
		});
	});

	app.listen(3000, function(){
		console.log("SERVER listening on 3000");
	});