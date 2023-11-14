import Sobre from '../sobre/Sobre'
import './corpo.css'

// eslint-disable-next-line react/prop-types
const Corpo = ({ modoDark }) => {


  return (
    <div className={modoDark ? "corpo" : "dark"}>

      <Sobre />
    </div>
  )
}

export default Corpo