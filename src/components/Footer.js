import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a
              href="#"
              className="text-2xl font-['Pacifico'] text-primary mb-4 inline-block"
            >
              Dear Locals
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Yerel işletmeleri destekleyen, görünür kılan ve topluluk bağlarını
              güçlendiren bağımsız bir inisiyatif.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Hızlı Erişim
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Ana Sayfa</a></li>
              <li><a href="#map" className="text-gray-600 hover:text-primary">Harita</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary">Hakkımızda</a></li>
              <li><a href="#form" className="text-gray-600 hover:text-primary">İşletme Ekle</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-mail-line text-primary w-5 h-5 mr-2 mt-0.5"></i>
                <span className="text-gray-600">info@dearlocals.org</span>
              </li>
              <li className="flex items-start">
                <i className="ri-instagram-line text-primary w-5 h-5 mr-2 mt-0.5"></i>
                <span className="text-gray-600">@dearlocals.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Dear Locals. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-primary">Gizlilik Politikası</a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
