import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import validationSchema from "../components/validations.js"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function CreateOrder() {

    const post  =  (url,data) => {

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log("hata"));
    
    
    }

    const navigate=useNavigate();

    const {handleSubmit, handleChange, handleBlur, values}=useFormik({
        initialValues:{
            siparisNo:"",
            siparisTarihi:"",
            musteriSiparisNo:"",
            musteriAdi:"",
            urunAdi:"",
            urunKodu:"",
            dokumResimNo:"",
            dokumMalzemesi:"",
            parcaAgirligiKg:"",
            siparisMiktari:"",
            toplamSiparisKalemAgirligi:"",
            dokumBirimFiyati:"",
            modelNo:"",
            modelAcıklama:"",
            sevkTarihi:"",
            sevkMiktari:"",
            sevkMiktariEsitiKg:"",
            buSipariseAitSevkEdilenToplamMiktar:"",
            sevkEdilenToplamMiktarEsiti:"",
            kalanAcikMiktar:"",
            kalanAcikMiktarEsitiKg:""




        },

        onSubmit: (values,{resetForm}) => {
            post("http://localhost:3333/posts",values)
            alert("siparişiniz başarıyla oluşturuldu")
            resetForm({values:""});
        },
        validationSchema


    })

   
   
return(

    <>

    
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
    

    <div className='container '>
    <form className='' onSubmit={handleSubmit}>
        <h5 className='row border-bottom border-primary m-1'>SİPARİŞ-MÜŞTERİ BİLGİLERİ</h5>
        <div className='row m-1'>
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='siparisNo'>Sipariş No</label>
                <input className="form-control m-1" id="siparisNo" name="siparisNo" value={values.siparisNo} onChange={handleChange} onBlur={handleBlur} placeholder="Sipariş No"/>
            </div>
        
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='siparisTarihi'>Sipariş Tarihi</label>
                <input className="form-control m-1" id="siparisTarihi" name="siparisTarihi" value={values.siparisTarihi} onBlur={handleBlur} onChange={handleChange} placeholder="Sipariş Tarihi"/>
            </div>

            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='musteriSiparisNo'>Müşteri Sipariş No</label>
            <input className="form-control m-1" id="musteriSiparisNo" name="musteriSiparisNo" value={values.müsteriSiparisNo} onChange={handleChange} onBlur={handleBlur} placeholder="Müşteri Sipariş No"/>
            </div>
            
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='musteriAdi'>Müşteri Adı</label>
            <input className="form-control m-1" id="musteriAdi" name="musteriAdi" value={values.musteriAdi} onBlur={handleBlur} onChange={handleChange} placeholder="Müşteri Adı"/>
            </div>
           
        </div>
        <h5 className='row border-bottom border-primary m-1 text-center'>SİPARİŞ KALEMİ BİLGİLERİ</h5>    
        <div className='row m-1' > 
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='urunAdi'>Ürün Adı</label>
            <input className="form-control m-1" id="urunAdi" name="urunAdi" value={values.urunAdi} onChange={handleChange} onBlur={handleBlur} placeholder="Ürün Adı"/>
            </div>   
            
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='urunKodu'>Ürün Kodu</label>
            <input className="form-control m-1" id="urunKodu" name="urunKodu" value={values.urunKodu} onBlur={handleBlur} onChange={handleChange} placeholder="Ürün Kodu"/>
            </div>  
             
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='dokumResimNo'>Döküm Resim No</label>
            <input className="form-control m-1" id="dokumResimNo" name="dokumResimNo" value={values.dokumResimNo} onChange={handleChange} onBlur={handleBlur} placeholder="Döküm Resim No"/>
            </div> 
           
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='dokumMalzemesi'>Döküm Malzemesi</label>
            <input className="form-control m-1" id="dokumMalzemesi" name="dokumMalzemesi" value={values.dokumMalzemesi} onBlur={handleBlur} onChange={handleChange} placeholder="Döküm Malzemesi"/>
            </div> 
           
        </div>
        <h5 className='row border-bottom border-primary m-1 text-center'>MODEL BİLGİLERİ</h5>    
        <div className='row m-1'>
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='parcaAgirligiKg'>Parça Ağırlığı(kg)</label>
            <input className="form-control m-1" id="parcaAgirligiKg" name="parcaAgirligiKg" value={values.parcaAgirligiKg} onChange={handleChange} onBlur={handleBlur} placeholder="Parça Ağırlığı(kg)"/>
            </div>  
               
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='siparisMiktari'>Sipariş Miktarı</label>
            <input className="form-control m-1"  id="siparisMiktari" name="siparisMiktari" value={values.siparisMiktari} onBlur={handleBlur} onChange={handleChange} placeholder="Sipariş Miktarı"/>
            </div>  
               
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='toplamSiparisKalemAgirligi'>Toplam Sipariş Kalem Ağırlığı</label>
            <input className="form-control m-1" id="toplamSiparisKalemAgirligi" name="toplamSiparisKalemAgirligi" value={values.toplamSiparisKalemAgirligi} onChange={handleChange} onBlur={handleBlur} placeholder="Toplam Sipariş Kalem Ağırlığı"/>
            </div>  
               
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='dokumBirimFiyati'>Döküm Birim Fiyatı</label>
            <input className="form-control m-1" id="dokumBirimFiyati" name="dokumBirimFiyati" value={values.dokumBirimFiyati} onBlur={handleBlur} onChange={handleChange} placeholder="Döküm Birim Fiyatı"/>
            </div>  
               
        </div>
        <h5 className='row border-bottom border-primary m-1'>SEVK BİLGİLERİ</h5>     
        <div className='row m-1'>  
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='modelNo'>Model No</label>
            <input className="form-control m-1" id="modelNo" name="modelNo" value={values.modelNo} onChange={handleChange} onBlur={handleBlur} placeholder="Model No"/>
            </div>  

            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='modelAcıklama'>Model Açıklama</label>
            <input className="form-control m-1" id="modelAcıklama" name="modelAcıklama" value={values.modelAcıklama} onBlur={handleBlur} onChange={handleChange} placeholder="Model Açıklama"/>
            </div>  
                 
        </div>    
        <div className='row m-1'>
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='sevkTarihi'>Sevk Tarihi</label>
                <input className="form-control m-1" id="sevkTarihi" name="sevkTarihi" value={values.sevkTarihi} onChange={handleChange} onBlur={handleBlur} placeholder="Sevk Tarihi"/>
            </div>  
                 
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='sevkMiktari'>Sevk Miktarı</label>
                <input className="form-control m-1"  id="sevkMiktari" name="sevkMiktari" value={values.sevkMiktari} onBlur={handleBlur} onChange={handleChange} placeholder="Sevk Miktarı"/>
            </div>  
                 
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='sevkMiktariEsitiKg'>Sevk Miktarı Eşiti(kg)</label>
                <input className="form-control m-1" id="sevkMiktariEsitiKg" name="sevkMiktariEsitiKg" value={values.sevkMiktariEsitiKg} onChange={handleChange} onBlur={handleBlur} placeholder="Sevk Miktarı Eşiti(kg)"/>
            </div>  
                 
            <div className='col m-1'>
                <label className="form-label m-1" htmlFor='buSipariseAitSevkEdilenToplamMiktar'>Siparişe Ait Sevk Edilen Toplam Miktar</label>
                <input className="form-control m-1" id="buSipariseAitSevkEdilenToplamMiktar" name="buSipariseAitSevkEdilenToplamMiktar" value={values.buSipariseAitSevkEdilenToplamMiktar} onBlur={handleBlur} onChange={handleChange} placeholder="Siparişe Ait Sevk Edilen Toplam Miktar"/>
            </div>  
                 
        </div>   
        <div className='row m-1'> 
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='sevkEdilenToplamMiktarEsiti'>Sevk Edilen Toplam Miktar Eşiti(kg)</label>
            <input className="form-control m-1" id="sevkEdilenToplamMiktarEsiti" name="sevkEdilenToplamMiktarEsiti" value={values.sevkEdilenToplamMiktarEsiti} onChange={handleChange} onBlur={handleBlur} placeholder="Sevk Edilen Toplam Miktar Eşiti(kg)"/>
            </div> 
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='kalanAcikMiktar'>Kalan Açık Miktar</label>
            <input className="form-control m-1" id="kalanAcikMiktar" name="kalanAcikMiktar" value={values.kalanAcikMiktar} onBlur={handleBlur} onChange={handleChange} placeholder="Kalan Açık Miktar"/>
            </div> 
            <div className='col m-1'>
            <label className="form-label m-1" htmlFor='kalanAcikMiktarEsitiKg'>Kalan Açık Miktar Eşiti(kg)</label>
            <input className="form-control m-1" id="kalanAcikMiktarEsitiKg" name="kalanAcikMiktarEsitiKg" value={values.kalanAcikMiktarEsitiKg} onChange={handleChange} onBlur={handleBlur} placeholder="Kalan Açık Miktar Eşiti(kg)"/>
            </div>   
       </div> 
            <button className="d-grid gap-2 col-6 mx-auto btn btn-primary" type="submit">SATIŞ SİPARİŞİ OLUŞTUR</button>
            <br/>
        
        </form> 

        <code>{JSON.stringify(values)}</code>

        </div>

            
    </>
)
  

}

export default CreateOrder