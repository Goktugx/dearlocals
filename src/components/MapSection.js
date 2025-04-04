'use client'

import React, { useEffect, useState, useMemo } from 'react'
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView
} from '@react-google-maps/api'
import supabase from '@/lib/supabase'

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const MapSection = () => {
  const [markers, setMarkers] = useState([]) // Supabase verisi buraya
  const [isMapsLoaded, setIsMapsLoaded] = useState(false)
  const [iconMap, setIconMap] = useState({})
  const [activeMarker, setActiveMarker] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const center = useMemo(() => ({ lat: 39.9208, lng: 32.8541 }), [])
  const mapContainerStyle = useMemo(
    () => ({ width: '100%', height: '600px' }),
    []
  )

  // 🔹 Supabase'ten verileri al
  useEffect(() => {
    const fetchMarkers = async () => {
      const { data, error } = await supabase.from('businesses').select('*')

      if (error) {
        console.error('❌ Supabase hata:', error.message)
      } else if (!data || data.length === 0) {
      } else {
        setMarkers(data)
      }
    }

    fetchMarkers()
  }, [])

  // 🔹 Marker ikonları
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google?.maps) {
      setIconMap({
        kafe: {
          url: '/restauranticon.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        restoran: {
          url: '/icons/restoran.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        firin: {
          url: '/icons/firin.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        bar: {
          url: '/icons/bar.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        butik: {
          url: '/icons/butik.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        kitapci: {
          url: '/icons/kitapci.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        kuafor: {
          url: '/icons/kuafor.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        },
        atolye: {
          url: '/icons/atolye.svg',
          scaledSize: new window.google.maps.Size(30, 30)
        }
      })
    }
  }, [isMapsLoaded])

  const handleMarkerClick = index => {
    setActiveMarker(index)
  }

  const categories = [
    { label: 'Tüm İşletmeler', value: 'all' },
    { label: 'Kafe / Restoran', value: 'kafe' },
    { label: 'Bar / Meyhane', value: 'bar' },
    { label: 'Butik / Mağaza', value: 'butik' },
    { label: 'Kitapçı', value: 'kitapci' },
    { label: 'Kuaför / Berber', value: 'kuafor' },
    { label: 'Atölye', value: 'atolye' }
  ]

  return (
    <section id='map' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
            Yerel İşletmeler Haritası
          </h2>
          <p className='text-lg text-gray-700'>
            Şehrimizdeki yerel işletmeleri keşfedin. Filtreleme seçeneklerini
            kullanarak size en yakın veya ilgilendiğiniz kategorideki
            işletmeleri bulabilirsiniz.
          </p>
        </div>

        <LoadScript
          googleMapsApiKey={googleMapsApiKey}
          onLoad={() => setIsMapsLoaded(true)}
        >
          {isMapsLoaded && (
            <>
              <div className='mb-6 flex flex-wrap justify-center gap-4 z-10 relative'>
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`category-filter px-6 py-3 rounded-md whitespace-nowrap transition border cursor-pointer ${
                      selectedCategory === cat.value
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={6}
                onClick={() => setActiveMarker(null)}
              >
                {markers
                  .filter(
                    marker =>
                      selectedCategory === 'all' ||
                      marker.category === selectedCategory
                  )
                  .map((marker, index) => (
                    <Marker
                      key={index}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      title={marker.title}
                      icon={iconMap[marker.category]}
                      onClick={() => handleMarkerClick(index)}
                    >
                      {activeMarker === index && (
                        <OverlayView
                          position={{ lat: marker.lat, lng: marker.lng }}
                          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        >
                          <div className='bg-gray-900 text-white rounded-xl shadow-lg p-4 min-w-[220px]'>
                            <h3 className='text-base font-semibold'>
                              {marker.title}
                            </h3>
                            <p className='text-sm text-gray-400'>
                              {marker.address}
                            </p>
                            {marker.instagramUserName && (
                              <a
                                href={`https://www.instagram.com/${marker.instagramUserName}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-2 flex items-center gap-2 text-sm text-gray-300 hover:text-white'
                              >
                                <div className='w-6 h-6 bg-white/10 rounded-full flex items-center justify-center'>
                                  <i className='ri-instagram-line' />
                                </div>
                                <span>@{marker.instagramUserName}</span>
                              </a>
                            )}
                          </div>
                        </OverlayView>
                      )}
                    </Marker>
                  ))}
              </GoogleMap>
            </>
          )}
        </LoadScript>

        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-4'>
            Haritada işletmenizi göremiyor musunuz?
          </p>
          <a
            href='#form'
            className='inline-flex items-center bg-gray-900 rounded-md text-white px-8 py-4 font-bold text-lg whitespace-nowrap hover:bg-gray-800 transition duration-300'
          >
            İşletmeni Haritaya Ekle
          </a>
        </div>
      </div>
    </section>
  )
}

export default MapSection
