'use client'

import React from 'react'

const BusinessForm = () => {
  return (
    <section id='form' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
              İşletmeni Ekle
            </h2>
            <p className='text-lg text-gray-700'>
              Yerel işletmenizi haritamıza ekleyerek topluluk ağımıza katılın ve
              daha fazla kişiye ulaşın.
            </p>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-md border border-gray-200'>
            <form
              className='space-y-6'
              action='https://formsubmit.co/goktugardahann@gmail.com'
              method='POST'
            >
              <input type='hidden' name='_captcha' value='true' />
              <input type='hidden' name='_template' value='table' />
              <input
                type='hidden'
                name='_next'
                value='https://seninsiten.com/tesekkurler'
              />

              {/* İşletme Adı */}
              <div>
                <label
                  htmlFor='businessName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  İşletme Adı*
                </label>
                <input
                  name='Ad'
                  type='text'
                  id='businessName'
                  className='w-full px-4 py-3 border border-gray-300 rounded focus:border-primary'
                  placeholder='İşletmenizin adını girin'
                  required
                />
              </div>

              {/* Kategori */}
              <div>
                <label
                  htmlFor='category'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Kategori*
                </label>
                <div className='relative'>
                  <select
                    id='category'
                    className='w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-primary pr-8'
                    required
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Kategori seçin
                    </option>
                    <option value='cafe'>Kafe</option>
                    <option value='restaurant'>Restoran</option>
                    <option value='bakery'>Fırın/Pastane</option>
                    <option value='grocery'>Bakkal/Market</option>
                    <option value='craft'>Zanaat/El İşi</option>
                    <option value='bookstore'>Kitapçı</option>
                    <option value='other'>Diğer</option>
                  </select>

                  <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                    <div className='w-5 h-5 flex items-center justify-center text-gray-500'>
                      <i className='ri-arrow-down-s-line'></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adres */}
              <div>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Adres*
                </label>
                <textarea
                  id='address'
                  rows='3'
                  className='w-full px-4 py-3 border border-gray-300 rounded focus:border-primary'
                  placeholder='İşletmenizin açık adresini girin'
                  required
                ></textarea>
              </div>

              {/* Harita Linki */}
              <div>
                <label
                  htmlFor='mapLink'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Google Maps Linki (İsteğe Bağlı)
                </label>
                <input
                  name='Google Haritalar Link'
                  type='url'
                  id='mapLink'
                  className='w-full px-4 py-3 border border-gray-300 rounded focus:border-primary'
                  placeholder='https://maps.google.com/...'
                />
              </div>

              {/* Boykot Sorusu */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-3'>
                  2 Nisan Boykotuna Katıldınız mı?*
                </label>
                <div className='space-y-2'>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='boycottYes'
                      name='Boykot'
                      className='custom-radio'
                      required
                    />
                    <label htmlFor='boycottYes' className='ml-2 text-gray-700'>
                      Evet, işletmemiz kapalıydı
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='boycottNo'
                      name='Boykot'
                      className='custom-radio'
                    />
                    <label htmlFor='boycottNo' className='ml-2 text-gray-700'>
                      Hayır, açıktık
                    </label>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='instagram'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Instagram (İsteğe Bağlı)
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <i className='ri-instagram-line text-gray-500'></i>
                    </div>
                    <input
                      type='text'
                      id='instagram'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:border-primary'
                      placeholder='@kullaniciadi'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='twitter'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    X/Twitter (İsteğe Bağlı)
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <i className='ri-twitter-x-line text-gray-500'></i>
                    </div>
                    <input
                      type='text'
                      id='twitter'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:border-primary'
                      placeholder='@kullaniciadi'
                    />
                  </div>
                </div>
              </div>

              {/* Açıklama */}
              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  İşletme Açıklaması (İsteğe Bağlı)
                </label>
                <textarea
                  id='description'
                  rows='4'
                  className='w-full px-4 py-3 border border-gray-300 rounded focus:border-primary'
                  placeholder='İşletmeniz hakkında kısa bir açıklama yazın'
                ></textarea>
              </div>

              {/* Onay Kutusu */}
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='terms'
                  className='custom-checkbox'
                  required
                />
                <label htmlFor='terms' className='ml-2 text-gray-700 text-sm'>
                  <span>Verdiğim bilgilerin doğruluğunu onaylıyor ve </span>
                  <a href='#' className='text-primary hover:underline'>
                    gizlilik politikasını
                  </a>
                  <span> kabul ediyorum.</span>
                </label>
              </div>

              {/* Submit */}
              <div className='pt-4'>
                <button
                  type='submit'
                  className='w-full bg-gray-900 text-white cursor-pointer px-8 py-4 font-semibold rounded-md whitespace-nowrap flex items-center justify-center hover:bg-gray-900 transition-colors'
                >
                  İşletmeni Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessForm
