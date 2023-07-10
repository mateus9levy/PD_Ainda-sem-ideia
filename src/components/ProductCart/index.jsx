import "../../styles/productCard-style.css"
const ProductCard = ({ product }) => {
    return (
        <>
            <div className="product-card">
                <img src={`../../images/${product.image}`} alt="" />
                <h4>{product.name}</h4>
                <div>
                    <span> R$ {product.price}</span>
                </div>
            </div>
        </>
    )

}

export default ProductCard