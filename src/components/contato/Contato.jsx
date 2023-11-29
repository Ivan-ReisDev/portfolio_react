import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './contato.css'
const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || message === '' ) {
      alert('Preencha todos os cmpos');
      return
    }

    const tampleteParams = {
      from_name: name,
      message:message,
      email: email
    
    }


    emailjs.send('service_8i5noo5', 'template_1t7d1f9', tampleteParams, '5L6tMEX_6Az-reCa2' )
    .then((response) => {
      console.log('email enviado', response.status, response.text)
      setEmail('')
      setMessage('')
      setName('')
    }, (err) => {
      console.log('ERRO', err.status, err.text)
    
    })
  }

  return (
    <section className='contato' id='contato'>
        <form className="form" onSubmit={sendEmail}>
            <input type="text" 
            name="name" 
            id="name" 
            placeholder='Digite seu nome *' 
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <input type="text" 
            name='email' 
            id='email' 
            placeholder='Digite seu e-mail *'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            />

            <textarea name="message" 
            id="message" 
            cols="30" 
            rows="10" 
            placeholder='Digite sua mensagem *' 
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />
       
            <input type="submit" value='Enviar' />
        </form>

    </section>
  )
}

export default Contato