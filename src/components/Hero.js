'use client'

import React from 'react'

const Hero = () => {
  return (
    <section className='hero-bg relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent'></div>
      <div className='container mx-auto relative z-10'>
        <div className='flex flex-col md:flex-row items-center min-h-[600px]'>
          <div className='w-full md:w-1/2 px-6 py-20 md:py-0'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6'>
              Yerel işletmeleri destekleyen kolektif topluluk projesi.
            </h1>
            <p className='text-lg text-gray-700 mb-8 max-w-xl'>
              Yerel işletmelere sahip çıkarak şehrimizin kültürel dokusunu
              koruyoruz. Bize katılın ve değişimin bir parçası olun.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href='#form'
                className='bg-gray-900 text-white px-8 py-4 font-semibold rounded-md whitespace-nowrap inline-flex items-center justify-center hover:bg-gray-800 transition duration-300'
              >
                İşletmeni Ekle
              </a>

              <a
                href='#map'
                className='border-2 border-primary text-primary px-8 py-4 font-semibold rounded-md whitespace-nowrap inline-flex items-center justify-center hover:bg-gray-100 transition duration-300'
              >
                Haritayı Keşfet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
