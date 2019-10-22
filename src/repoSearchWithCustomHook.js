
import React, { useState } from 'react';
import useRepoSearch from './useRepoSearch';

function RepoSearchWithCustomHook() {
    const [query, setQuery] = useState('');
    let searchInput = React.createRef();
    function  update(e) {
        e.preventDefault();
        setQuery(searchInput.current.value);
    }

    const data = useRepoSearch({q: query});

    return (
        <form onSubmit={update}>
          <label>
            Search Repo by Starts
            <input type="text" ref={searchInput} />
          </label>
          <input type="submit" value="Submit" />
          {data.loading ?
            'loading' :
            null
          }
          {data.items.length ?
                (<ul>
                    {
                      data.items.map(item => (
                          <li key={item.id}>
                            {item.stargazers_count} <a href={item.html_url} target="_blank">{item.name}</a>
                          </li>
                        )
                      )
                    }
                  </ul>)
            :
            null
          }
        </form>
      );
}

export default RepoSearchWithCustomHook;