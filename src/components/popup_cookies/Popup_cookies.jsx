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
        <div className='popup-meio'>
            <p>Olá! Este site utiliza cookies para garantir que você tenha a melhor experiência possível. Os cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a entender como você utiliza o site. Ao continuar navegando, você está concordando com o uso de cookies.</p>
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