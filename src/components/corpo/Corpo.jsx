import Popup_cookies from '../popup_cookies/Popup_cookies'
import Sobre from '../sobre/Sobre'
import Tecnologias from '../tecnologias/Tecnologias'
import './corpo.css'

// eslint-disable-next-line react/prop-types
const Corpo = ({ modoDark }) => {


  return (
    <div className={modoDark ? "corpo" : "dark"}>

      <Sobre />
      <Tecnologias/>
      <Popup_cookies/>

    </div>
  )
}

export default Corpo