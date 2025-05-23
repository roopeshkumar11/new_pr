import Card from "../components/Card"
import Navbar from "../components/Navbar"
import ProductList from "./ProductList"
import TurbanSlider from "./TurbanSlider"

function Hero(){
    return(
        <>
<Navbar/>

<TurbanSlider/>
<ProductList/>
        <h1>Hero Section</h1>
        </>
    )
}


export default Hero