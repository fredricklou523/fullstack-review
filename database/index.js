const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: Number,
  name: String,
  owner_login: String,
  html_url: String,
  description: String,
  stargazers_count: Number,
  forks_count: Number,
  archived_at: { type: Date, default: Date.now }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repo => {
  var doc = new Repo({
    repo_id: repo.id,
    name: repo.name,
    owner_login: repo.owner.login,
    html_url: repo.html_url,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count
  })
  doc.save(err => { if (err) return console.log(err) });
  // console.log(Repo.schema.obj);
}

let fetch = () => {
  console.log('fetching!');
  Repo.find({ name: 'zhujohnny', function (err, repo) { console.log('hello'); } });
}

module.exports.save = save;
module.exports.fetch = fetch;