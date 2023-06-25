import React from 'react'
import '../styles/About.css'
import MultiplePizza from '../assets/aboutt.png';

export const About = () => 
{
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizza})` }}>

        </div>

        <div className='aboutBottom'>
            <h1> HAKKIMIZDA </h1>
            <h2>Kopernik Pizza: Galaksinin En Sıcak Pizzası</h2>  
            <p>
               

                Sloganımızla ifade ettiğimiz gibi, Kopernik Pizza olarak amacımız, müşterilerimize galaktik bir lezzet deneyimi sunmaktır. Sıcacık pizzalarımızla damakları fethederek, tatlarıyla galaksinin her köşesine ulaşmayı hedefliyoruz.

Kopernik Pizza, yılların tecrübesi ve tutkulu ekibiyle, pizza sektöründe bir marka olarak kendini kanıtlamıştır. Kaliteli malzemelerimiz, özgün tariflerimiz ve ustalarımızın el emeği ile hazırlanan pizzalarımız, misafirlerimizin beklentilerini aşmayı amaçlar.

İşletmemizin temel değeri, müşteri memnuniyetidir. Her bir müşterimizi ayrıcalıklı hissettirmek için özenle hazırladığımız pizzalarımız, lezzetli bir yolculuk sunar. Sadece pizza yapmakla kalmayıp, yenilikçi yaklaşımımızla sürekli gelişime açık olmaktan gurur duyuyoruz.

Kopernik Pizza olarak, sektördeki liderliğimizi sürdürmek ve müşterilerimize en iyiyi sunmak için sürekli olarak kendimizi yeniliyoruz. Her adımda mükemmeliyeti hedefleyen bir ekibiz ve lezzet konusunda sınırları zorlamaktan çekinmiyoruz.

Misyonumuz, her bir pizzamızda taze ve kaliteli malzemeler kullanarak, müşterilerimize benzersiz bir lezzet deneyimi sunmaktır. Yaratıcılığımızı kullanarak, farklı tatları bir araya getirerek her damak zevkine hitap ediyoruz.

Vizyonumuz, müşterilerimize unutulmaz bir pizza deneyimi yaşatmak ve markamızı uluslararası düzeyde tanınan bir pizzacı haline getirmektir. Kopernik Pizza'nın adı, sıcaklığı, lezzeti ve yenilikçiliği ile eşanlamlı hale gelmiştir.

Kopernik Pizza ailesi olarak, müşterilerimize sadece bir pizza değil, aynı zamanda bir lezzet yolculuğu sunuyoruz. Kaliteden ödün vermeyen yaklaşımımızla, her bir pizza diliminde galaktik bir tat deneyimi yaşamak isteyen herkesi bekliyoruz. Kopernik Pizza'ya gelin, galaksinin en sıcak pizzasını tadın!</p>
        </div>
    </div>
  )
}
