import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({}) //will store the data of the currency
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.24/v1/currencies/${currency}.json`)

            .then((res) => res.json())//converted the incoming response to json format
            .then((res) => setData(res[currency]))

    }, [currency])//jab currency change ho tab call krega ye fetch ko and it is a dependency array
    console.log(data)
    return data;
}
export default useCurrencyInfo;