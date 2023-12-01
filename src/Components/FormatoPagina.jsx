import Aside from './Aside'
import Footer from './Footer'
import InfoProducts from '../Components/InfoProducts'
import  '../css/InfoProducts.css'
//import "../App.css";
//import '../css/FormatoPagina.css'

const FormatoPagina = () => {
    return (
        <div className="main">
             
            <div className="father">

                <Aside  />

                <div className="rightContainer">

                    <InfoProducts/>

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default FormatoPagina