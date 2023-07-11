import "../../styles/help-style.css"
import OutputCard from "../../components/OutputCard";
import { useOutputCardData } from "../../contexts/OutputCardContext";
const Help = () => {
    const { outputCardData }  = useOutputCardData()
    console.log(outputCardData)
    if(outputCardData.loaded){
        return ( 
            <>
            </>
        )
    }
    return (
        <>
            <OutputCard/>
        </>
    )

}


export default Help