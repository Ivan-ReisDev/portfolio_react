import React from 'react'
import Burguer from '../../assets/burguer.jpg'
import Calcule from '../../assets/calcule-aqui.jpg'
import Estoque from '../../assets/estoque.jpg'
import Gerador from '../../assets/gerador-de-senha.jpg'
import Pdf from '../../assets/geradordepdf.jpg'
import Ld from  '../../assets/ld.jpg'
import Responsivo from  '../../assets/responsivo.jpg'
import './projetos.css'

const Projetos_main = () => {

  const images = [
    Burguer,
    Calcule,
    Estoque,
    Gerador,
    Pdf,
    Ld,
    Responsivo
  ];
  return (
    
    <section id='projetos' className='projetos'>
      <div className='projetos-title'>
        <h3>Meus Projetos</h3>
      </div>
      <div className="galeriaPai">
      <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">

          <img src={image} alt={`Imagem ${index + 1}`} />
        </div>
      ))}
    </div>
      </div>
      

    </section>
  )
}

export default Projetos_main