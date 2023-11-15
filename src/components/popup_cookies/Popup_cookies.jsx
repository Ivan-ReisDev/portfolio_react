import { useState } from 'react';
import './popup_cookies.css'

function Popup_cookies() {
    var storeLocalCokies = localStorage.getItem('cookies')

    const [cookies, setCookies] = useState(storeLocalCokies ? storeLocalCokies === 'true' : false)
    const aceiteCookies = () => {
        setCookies((prevCookies) => {
          const newAceiteCookies = !prevCookies;
          localStorage.setItem("cookies", newAceiteCookies.toString());
          return newAceiteCookies;
        });
      };

  return (
    <>
    <div className={storeLocalCokies ? 'popup-pg-none' :'popup-pg'}>
    <div className='popup'>
        <div className='popup-top'>
            <h5>Controle sua Privacidade</h5>
        </div>
        <div className='popup-meio'>
            <p>Nosso site utiliza cookies e cache para melhorar sua navegação</p>
        </div>
        <div className='popup-end'> 
            <button onClick={aceiteCookies}>Prosseguir</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Popup_cookies;