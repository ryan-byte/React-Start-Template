import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setData(null);
            setIsPending(null);
            setError(null);
            setIsPending(true);
            try {
                // Simulate a delay for demonstration purposes (you can change the delay time)
                // const delayTime = 2000; // 2 seconds delay
                // await new Promise((resolve) => setTimeout(resolve, delayTime));

                // Calculate request performance code
                // const startTime = performance.now(); 

                const response = await fetch(url);

                // Performance check: calculate the total number of ms it takes to make the request
                // const endTime = performance.now();
                // console.log(`Request of: ${url} took ${endTime - startTime} milliseconds`);

                if (!response.ok) throw {status: response.status, message:`${response.status} - ${response.statusText}`};
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(error)
                setIsPending(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isPending, error };
};