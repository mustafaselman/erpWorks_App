import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function Home() {

    const user = useContext(UserContext);
 

  return (

    

    <div>
        
        <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/homelayout">Anasayfa</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/createorder">Sipariş Oluştur</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/orderlist">Sipariş Detaylı Listesi</a>
  </li>

</ul>
        
    
        </div>
  )
}

export default Home