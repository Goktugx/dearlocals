'use client'

import React, { useState } from 'react'
import supabase from '@/lib/supabase' // ← bu dosya daha önce oluşturulmuş olmalı

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email) return

    // Aynı e-posta daha önce eklenmiş mi kontrol et
    const { data: existing } = await supabase
      .from('newsletter')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      setMessage('❗ Bu e-posta zaten kayıtlı.')
      return
    }

    // Yeni e-posta ekle
    const { error } = await supabase.from('newsletter').insert([{ email }])

    if (error) {
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
    } else {
      setMessage('✅ Başarıyla abone oldunuz, teşekkürler!')
      setEmail('')
    }
  }

  return (
    <section className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              Haberdar Ol
            </h2>
            <p className='text-gray-700'>
              Yeni eklenen işletmeler, etkinlikler ve projelerimizden haberdar
              olmak için bültenimize abone olun.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-4'
          >
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='flex-1 px-4 py-3 border border-gray-300 rounded focus:border-primary'
              placeholder='E-posta adresiniz'
              required
              name='email'
            />
            <button
              type='submit'
              className='bg-gray-900 cursor-pointer text-white px-8 py-3 font-semibold rounded-md whitespace-nowrap flex items-center justify-center hover:bg-gray-800 transition-co rs'
            >
              Abone Ol
            </button>
          </form>

          {message && (
            <p className='text-center mt-4 text-sm text-green-600'>{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
