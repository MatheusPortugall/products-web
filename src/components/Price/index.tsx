import { useState, useEffect } from "react"

function Price({price, currency, isLarge}: any) {
    const [priceList, setPriceList] = useState<string[]>([]);
    const [stringCurrency, setStringCurrency] = useState('')

    useEffect(() => {
        const priceList = String(price).split(".")
        setPriceList(priceList)
    }, [price])

    useEffect(() => {
        if(currency === 'BRL') setStringCurrency("R$")
        else setStringCurrency("$")
    }, [currency])
    
    if(isLarge) {
        return (
            <div className="price-group-large">
                <div className="currency">{stringCurrency}</div>
                <div className="price">{priceList[0]}</div>
                <div className="cents">{priceList[1]}</div>
            </div>
        )
    }
        
    return (
        <div className="price-group">
            <div className="currency">{stringCurrency}</div>
            <div className="price">{priceList[0]}</div>
            <div className="cents">{priceList[1]}{priceList && priceList[1] && priceList[1].length === 1 && '0'}</div>
        </div>
    )
}

export default Price