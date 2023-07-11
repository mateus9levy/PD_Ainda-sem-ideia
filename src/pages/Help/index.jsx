import "../../styles/help-style.css"
import OutputCard from "../../components/OutputCard";
import { useOutputCardData } from "../../contexts/OutputCardContext";
import ProductCard from "../../components/ProductCard";
const Help = () => {
    const { outputCardData }  = useOutputCardData()
    if(outputCardData.loaded){
        const getTotalAmount = ()=>{
            let amount = 0; 
            outputCardData.result.map((item)=>{
                amount+=item.price;

            })
            return amount
        }
        return ( 
            <div className="product">
            <h1>Produtos Sujeridos</h1>
            <h1>Total: R$ {getTotalAmount()} </h1>
            <div className="product-grid">
                {outputCardData.result.map((product) =>
                    <ProductCard key={product.id}  product={product} />
                )}
            </div>
        </div>
        )
    }
    return (
        <>
            <OutputCard/>
        </>
    )

}


export default Help