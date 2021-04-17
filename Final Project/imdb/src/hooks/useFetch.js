import { useEffect, useState } from "react";

const useFetch = url => {
    const [state, setState] = useState();
    useEffect(() => fetch(url)
        .then(data => data.json())
        .then(res => setState(res.moviesCollection))
        .catch(err => console.log(err)), [url])
    return [
        state
    ]
}
export default useFetch;