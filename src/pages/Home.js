import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function Home() {

    const user = useContext(UserContext);
    console.log(user,"sado")

  return (

    

    <div>
        
        <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/homelayout">Anasayfa</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/createorder">Sipariş Oluştur</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/orderlist">Sipariş Detaylı Listesi</a>
  </li>

</ul>
        
    
        </div>
  )
}

export default Home