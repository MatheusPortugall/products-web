import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getProductForId } from "../../actions/productActions"
import { useEffect } from "react"
import Price from "../../components/Price"

function ProductDetail(){
    const dispatch = useDispatch()
    const { id } = useParams();
    const productDetail = useSelector((state: any) => state.product.productDetail)
    useEffect(() => {
        dispatch(getProductForId(id))
    }, [])

    if(productDetail !== null) {
        return (
            <>
                <Helmet>
                    <title>Product Detail: {productDetail.title || 'Product Detail'}</title>
                    <meta name="description" content={productDetail.description || ''} />
                    <link rel="canonical" href={`/items/${id}`} />
                </Helmet>
                <section className="detail-container">
                    <div className="detail-product">
                        <img src={productDetail.picture} alt={productDetail.title} />
                        <div className="description-info">
                            <span className="description-title">Descrição do produto</span>
                            <p className="description">
                                {productDetail.description}
                            </p>
                        </div>
                    </div>
                    <div className="sale-product">
                        <span className="sold-quantity">Novo | +{productDetail.sold_quantity} vendidos</span>
                        <span className="sold-product-name">{productDetail.title}</span>
                        <Price 
                            price={productDetail.price.amount} 
                            currency={productDetail.price.currency} 
                            isLarge={true}
                        />
                        <button className="sold-button">Comprar</button>
                    </div>
                </section>
            </>
        )
    }
    return (
        <Helmet>
            <title>Product Detail</title>
            <meta name="description" content="Product Detail" />
            <link rel="canonical" href={`/items/${id}`} />
        </Helmet>
    )
        
}

export default ProductDetail