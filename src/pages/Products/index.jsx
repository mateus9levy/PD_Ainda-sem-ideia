import ProductCard from "../../components/ProductCard"
import data from "../../utils/data/products"
import "../../styles/products-style.css"

const Products = () => {

    return (
        <div className="product">
            <h1>Produtos:</h1>
            <div className="product-grid">
                {data.map((product) =>
                    <ProductCard key={product.id}  product={product} />
                )}
            </div>
        </div>
    )

}

export default Products