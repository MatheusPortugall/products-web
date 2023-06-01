import { Helmet } from "react-helmet-async"
import Product from "../../components/Product"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'

function ProductList() {
    const dispatch = useDispatch()
    const productsList = useSelector((state: any) => state.product.products)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryParam = searchParams.get('search') ?? ''
    const [mySearch, setMySearch] = useState('')

    useEffect(() => {
        setMySearch(queryParam)
        dispatch(getProducts(queryParam))
    }, [queryParam, dispatch])
    
    return (
        <>
            <Helmet>
                <title>Search product '{mySearch}'</title>
                <meta name="description" content="Search for products according to what was entered" />
                <link rel="canonical" href="/items" />
            </Helmet>
            <div className="container">
                {productsList.map((item: any) => {
                    return <Product
                    productUrlImg={item.picture}
                    key={item.id}
                    productName={item.title}
                    productPrice={item.price.amount}
                    productId={item.id}
                    currency={item.price.currency}
                /> 
                })}
            </div>
        </>
    )
} 

export default ProductList