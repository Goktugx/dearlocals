import React from 'react'

const Manifesto = () => {
  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-primary mb-12 max-w-3xl mx-auto text-center'>
          Manifesto
        </h2>

        <div className='max-w-3xl mx-auto'>
          <p className='text-lg leading-relaxed mb-6 text-gray-800'>
            Dear Locals, yerel işletmeleri görünür kılmak ve desteklemek
            amacıyla oluşturulmuş bağımsız bir topluluk projesidir. Büyük
            şirketlerin ve zincir mağazaların hakimiyeti altında kaybolan yerel
            işletmelerin sesi olmak için buradayız.
          </p>
          <p className='text-lg leading-relaxed mb-6 text-gray-800'>
            Yerel işletmeler, şehirlerimizin kültürel dokusunu oluşturan,
            ekonomik çeşitliliği sağlayan ve toplumsal bağları güçlendiren
            değerli varlıklardır. Her bir esnaf, her bir zanaatkar, her bir
            yerel girişimci, içinde bulunduğu mahallenin ve şehrin karakterini
            şekillendirir.
          </p>
          <p className='text-lg leading-relaxed mb-6 text-gray-800'>
            2 Nisan 2025 boykotu sonrasında, yerel işletmelere desteğimizi
            sürdürülebilir bir harekete dönüştürmeyi amaçlıyoruz. Bu platform,
            yerel işletmeleri keşfetmenizi, onları desteklemenizi ve bu harekete
            katılmanızı sağlayacak bir araçtır.
          </p>
          <p className='text-lg leading-relaxed text-gray-800'>
            Amacımız sadece bir gün değil, her gün yerel işletmeleri desteklemek
            ve onların varlığını sürdürmelerine katkıda bulunmaktır. Çünkü yerel
            kalmak, küresel düşünmektir.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
