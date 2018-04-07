const db = require('../database/index.js');
const github = require('../helpers/github.js');
const parse = require('body-parser');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(parse.text());

app.post('/repos', function (req, res) {	
	// console.log(req.method, req.body);
	let saveRepos = repos => repos.forEach(db.save);
	github.getReposByUsername(req.body, saveRepos);
  res.status(200).send('repos posted!');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!a
  // This route should send back the top 25 repos
 	res.status(200);
  db.fetch(res.send.bind(res));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

