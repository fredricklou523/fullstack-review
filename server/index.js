const db = require('../database/index.js');
const github = require('../helpers/github.js');
const parse = require('body-parser');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(parse.text());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
	
	console.log(req.method, req.body);
	
	let saveRepos = repos => repos.forEach(db.save);
	github.getReposByUsername(req.body, saveRepos);
  res.writeHead(200);
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!a
  // This route should send back the top 25 repos
  db.fetch();
  res.writeHead(200);
  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

