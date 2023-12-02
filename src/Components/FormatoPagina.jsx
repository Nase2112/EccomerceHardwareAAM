import Aside from './Aside'
import Footer from './Footer'
import Ayuda from "./Ayuda"
import CarritoInfo from "./CarritoInfo" 
//import "../App.css";
//import '../css/FormatoPagina.css'

const FormatoPagina = () => {
    return (
        <div className="main">

            <div className="father">

                <Aside  />

                <div className="rightContainer">
                    <CarritoInfo/>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default FormatoPagina