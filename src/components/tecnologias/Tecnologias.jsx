import React, { useState } from 'react'

import './tecnologias.css'
import Slide from '../Slide-tec/Slide';



const Tecnologias = () => {

    return (
        <>
            <section id='tecnologias' className="tecnologias">
                <div className='tecnologias-title'>
                    <h3>Tecnologias</h3>
                </div>
                <div className='content-pai'>
                    <Slide/>
                </div>
            </section>

        </>
    )
}

export default Tecnologias