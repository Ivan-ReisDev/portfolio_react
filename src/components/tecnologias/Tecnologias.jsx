import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaPython, FaJs } from "react-icons/fa";
import './tecnologias.css'



const Tecnologias = () => {

const tecnologiasInfo = [
    {   id:0,
        nome:"React",
        legenda: "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb."
    },

    {
        id:1,
        nome:"Javascript",
        legenda: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
    },

    {
        id:2,
        nome:"Python",
        legenda:"Trata-se de uma linguagem de programação de uso geral, o que significa que pode ser usada para criar uma grande variedade de aplicações diferentes e não é especializada em nenhum problema determinado. Essa versatilidade, juntamente com sua facilidade de uso para iniciantes, tornou-a uma das linguagens mais usadas atualmente."

    }


]


    return (
        <>
            <section id='tecnologias' className="tecnologias">
                <div className='tecnologias-title'>
                    <h3>Tecnologias</h3>
                </div>
                <div className='content-pai'>
                    <div className="content-icon">

                        <div className='icon'>
                            <FaReact />
                        </div>
                        <div className='title-tec'>
                             <h4>React</h4>
                        </div>
                    </div>
                    <div className="legenda">
                        <p>React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.</p>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Tecnologias