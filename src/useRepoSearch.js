import React, { useState, useEffect } from 'react';
import searchGithub from './searchGithub';

function useRepoHook({q}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        // You can await here
        const response = await searchGithub(q);
        setLoading(false);
        setItems(response)
      }
      if(q !== '') {
        fetchData();
      }
    }, [q]);
    return { items, loading };
}

export default useRepoHook;