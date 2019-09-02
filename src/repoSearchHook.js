import React, { useState, useEffect } from 'react';

function GetRepostHook() {
    const [result, setItems] = useState([]);
    const [query, setQuery] = useState('');

    function  update(e) {
        e.preventDefault();
        fetchRepos(query);
    }

    function fetchRepos(q) {
        fetch(`https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&client_id=3584ded00841aef41825&client_secret=c472c2fef18a34733161c7ff3a6859cdb6c8519c`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            setItems(myJson.items);
        });
    }

    return (
        <form onSubmit={update}>
          <label>
            Name:
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
          {result.length ?
                <ul>{result.map(item => <li>{`${item.name} - ${item.stargazers_count}`}</li>)}</ul>
                :
                null
          }
        </form>
      );
}

export default GetRepostHook;