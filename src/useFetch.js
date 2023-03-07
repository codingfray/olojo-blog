import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState (null);
    const [isPending, setIsPending] = useState (true);
    const [error, setError] = useState(null);
    useEffect(() => {
const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { siignal: abortCont.signal })
                .then(res => {
                    console.log(res);
                    if (!res.ok){
                        throw Error('Could not fetch data for the resource');
                    }
                    return res.json()
                })
                .then((data)=>{
                    console.log(data);
                    setData(data);
                    setIsPending (false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                    setError(err.message);
                    setIsPending (false);
                    }

                    
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;