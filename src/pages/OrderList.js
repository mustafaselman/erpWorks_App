import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function OrderList()
{
 
const[response,setResponse] = useState([]);
const[error,setError] = useState('');
const[loading,setLoading] = useState("verileriniz yükleniyor lütfen bekleyiniz...");

    const fetchData = async () => {
        try {
            const response = await axios("http://localhost:3001/posts");
        const {data} = response
        setResponse(data);
        } catch (error) {
            setError(error.message)
        }
       
    }
    useEffect(()=> {
        fetchData();
    },[])
//    console.log(response)
//    console.log(json.posts)
    return (
      
        <div >

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
<br/>

<div className="container">
{
            response?.length === 0 ? <p>{loading}</p> : 
        
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sipariş No</th>
      <th scope="col">Sipariş Tarihi</th>
      <th scope="col">Müşteri Sipariş No</th>
      <th scope="col">Müşteri Adı</th>
      <th scope="col">Ürün Adı</th>
      <th scope="col">Ürün Kodu</th>
      <th scope="col">Döküm Resim No</th>
      <th scope="col">Döküm Malzemesi</th>
      <th scope="col">Parça Ağırlığı(kg)</th>
      <th scope="col">Sipariş Miktarı</th>
      <th scope="col">Toplam Sipariş Kalem Ağırlığı</th>
      <th scope="col">Döküm Birim Fiyatı</th>
      <th scope="col">Model No</th>
      <th scope="col">Model Açıklama</th>
      <th scope="col">Sevk Tarihi</th>
      <th scope="col">Sevk Miktarı</th>
      <th scope="col">Sevk Miktarı Eşiti(kg)</th>
      <th scope="col">Siparişe Ait Sevk Edilen Toplam Miktar</th>
      <th scope="col">Sevk Edilen Toplam Miktar Eşiti(kg)</th>
      <th scope="col">Kalan Açık Miktar</th>
      <th scope="col">Kalan Açık Miktar Eşiti(kg)</th>
    </tr>
  </thead>
  <tbody>
       
            {

response?.map((post,index) =>
{console.log(post)
    return (
        <tr key={index}>
      <td>{post.siparisNo}</td>
      <td>{post.siparisTarihi}</td>
      <td>{post.musteriSiparisNo}</td>
      <td>{post.musteriAdi}</td>
      <td>{post.urunAdi}</td>
      <td>{post.urunKodu}</td>
      <td>{post.dokumResimNo}</td>
      <td>{post.dokumMalzemesi}</td>
      <td>{post.parcaAgirligiKg}</td>
      <td>{post.siparisMiktari}</td>
      <td>{post.toplamSiparisKalemAgirligi}</td>
      <td>{post.dokumBirimFiyati}</td>
      <td>{post.modelNo}</td>
      <td>{post.modelAcıklama}</td>
      <td>{post.sevkTarihi}</td>
      <td>{post.sevkMiktari}</td>
      <td>{post.sevkMiktariEsitiKg}</td>
      <td>{post.buSipariseAitSevkEdilenToplamMiktar}</td>
      <td>{post.sevkEdilenToplamMiktarEsiti}</td>
      <td>{post.kalanAcikMiktar}</td>
      <td>{post.kalanAcikMiktarEsitiKg}</td>
        </tr>
    )

})
                
       


            }

</tbody>
</table>
}
</div>
        </div>
    )
}

export default OrderList
