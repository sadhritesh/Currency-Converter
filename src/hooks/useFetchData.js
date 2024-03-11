import { useState, useEffect } from "react"

function useFetchData(currency){

    const [data, setData] = useState({})

    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setData(res[currency])
        })
        .catch(error=>console.log("Error :",error))
    },[currency])

    return data;
}

export default useFetchData;