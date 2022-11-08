import * as yup from 'yup';

const validations = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
  siparisNo: yup.string(),
  siparisTarihi:yup.string(),
  musteriSiparisNo:yup.string(),
  musteriAdi:yup.string(),
  urunAdi:yup.string(),
  urunKodu:yup.string(),
  dokumResimNo:yup.string(),
  dokumMalzemesi:yup.string(),
  parcaAgirligiKg:yup.string(),
  siparisMiktari:yup.string(),
  toplamSiparisKalemAgirligi:yup.string(),
  dokumBirimFiyati:yup.string(),
  modelNo:yup.string(),
  modelAcıklama:yup.string(),
  sevkTarihi:yup.string(),
  sevkMiktari:yup.string(),
  sevkMiktariEsitiKg:yup.string(),
  buSipariseAitSevkEdilenToplamMiktar:yup.string(),
  sevkEdilenToplamMiktarEsiti:yup.string(),
  kalanAcikMiktar:yup.string(),
  kalanAcikMiktarEsitiKg:yup.string(),
});

export default validations;