import ProductCard from "../../components/ProductCart"
import data from "../../utils/data/products"
import "../../styles/products-style.css"

const Products = () => {

    return (
        <div className="product">
            <div className="product-grid">
                {data.map((product) =>
                    <ProductCard key={product.id}  product={product} />
                )}
            </div>
        </div>
    )

}

export default Products