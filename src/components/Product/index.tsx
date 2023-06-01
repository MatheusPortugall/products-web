import { Link } from "react-router-dom"
import Price from "../Price"

function Product({productName, productPrice, productId, currency, productUrlImg}:any) {
    return (
      <div className="container-product">
            <div className="info-product">
                <img src={productUrlImg} alt={productName} />
                <div>
                    <Price price={productPrice} currency={currency} isLarge={false}/>
                    <p className="product-name">{productName}</p>
                </div>
            </div>
            <div className="more-details">
                <Link className="link" to={`/items/${productId}`}>
                    Mais detalhes
                </Link>
            </div>
      </div>
    )
}
  
  export default Product
  