import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Javascript from '../../assets/javascript.png'
import './slide.css'


const Slide = () => {
  const [cardClick, setCardClick] = useState(false) 
  const WidhtCard = () => {
    setCardClick(!cardClick);
  }
  return (
    <div>
        <div className={cardClick ? 'card active-card' : 'card'}>
            <div className='card-logo'>
                <img src={Javascript} alt="" />
            </div>
            <div className={cardClick ? 'legenda' : 'legenda-none'} >
              <h4>Javascript</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nam, maxime nesciunt, ad dolores omnis recusandae quae quo ducimus, quos architecto non distinctio. Officiis rem quas modi magni iste voluptas.</p>

            </div>
            <button onClick={WidhtCard}><FaAngleDown/></button>
        </div>
    </div>
  )
}

export default Slide