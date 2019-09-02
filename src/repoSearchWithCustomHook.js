import React, { useState } from 'react';
import repoSearchCustomHook from './repoSearchCustomHook';

function GetRepostHook() {
    const [query, setQuery] = useState('');
    let searchInput = React.createRef();
    function  update(e) {
        e.preventDefault();
        setQuery(searchInput.current.value);
    }

    const data = repoSearchCustomHook({q: query});

    return (
        <form onSubmit={update}>
          <label>
            Search Repo by Starts
            <input type="text" ref={searchInput} />
          </label>
          <input type="submit" value="Submit" />
          {data.length ?
                (<ul>
                    {
                      data.map(item => <li key={item.id}>{item.stargazers_count} <a href={item.url}>{item.name}</a></li>
                      )
                    }
                  </ul>)
            :
            null
          }
        </form>
      );
}

export default GetRepostHook;