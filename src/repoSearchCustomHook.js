import React, { useState, useEffect } from 'react';
import searchGithub from './searchGithub';

function GetRepostHook({q}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await searchGithub(q);
        setItems(response)
      }
      if(q !== '') {
        fetchData();
      }
    }, [q]);
    return items;
}

export default GetRepostHook;