import Aside from './Aside'
import Footer from './Footer'
//import "../App.css";
//import '../css/FormatoPagina.css'

const FormatoPagina = () => {
    return (
        <div className="main">

            <div className="father">

                <Aside  />

                <div className="rightContainer">
                    {children}

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default FormatoPagina