'use client'

import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <a href='#' className="text-2xl font-['Pacifico'] text-primary">
          Dear Locals
        </a>
        <nav className='hidden md:flex items-center space-x-8'>
          <a href='#' className='text-primary hover:text-gray-700 font-medium'>
            Ana Sayfa
          </a>
          <a
            href='#manifesto'
            className='text-primary hover:text-gray-700 font-medium'
          >
            Manifesto
          </a>
          <a
            href='#map'
            className='text-primary hover:text-gray-700 font-medium'
          >
            Harita
          </a>
          <a
            href='#form'
            className='text-primary hover:text-gray-700 font-medium'
          >
            İşletme Ekle
          </a>
        </nav>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <span className='text-sm font-medium'>TR</span>
            <label className='custom-switch'>
              <input type='checkbox' className='sr-only' />
              <span className='slider'></span>
            </label>
            <span className='text-sm font-medium'>EN</span>
          </div>
          <button className='md:hidden w-10 h-10 flex items-center justify-center text-primary'>
            <i className='ri-menu-line ri-lg'></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
