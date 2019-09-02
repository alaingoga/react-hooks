function serachGithub(q) {
  return fetch(`https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&client_id=3584ded00841aef41825&client_secret=c472c2fef18a34733161c7ff3a6859cdb6c8519c`)
  .then(response => response.json())
  .then(myJson => myJson.items);
}

export default serachGithub;