import React from "react";
import BusinessCard from "./BusinessCard";

const businesses = [
  {
    image: "https://public.readdy.ai/ai/img_res/a75236e1b51721d97151333f136fd341.jpg",
    icon: "cup-line",
    title: "Kahve Durağı",
    description:
      "Kadıköy'ün kalbinde, el yapımı kahveleri ve ev yapımı tatlılarıyla 15 yıldır hizmet veren samimi bir mekan.",
    address: "Caferağa Mah., Moda Cad. No:24, Kadıköy",
    instagram: "#",
    twitter: "#",
    tag: "2 Nisan Katılımcısı",
  },
  {
    image: "https://public.readdy.ai/ai/img_res/8b230a8701a95fbf7d53f766df9dd728.jpg",
    icon: "store-2-line",
    title: "Anadolu Fırını",
    description:
      "Üç kuşaktır aynı tariflerle ekmek ve börek yapan, mahalle kültürünü yaşatan geleneksel bir fırın.",
    address: "Acıbadem Mah., Akasya Sok. No:12, Üsküdar",
    instagram: "#",
    twitter: "",
    tag: "2 Nisan Katılımcısı",
  },
  {
    image: "https://public.readdy.ai/ai/img_res/e45867739aa632a9d4d0834f47b75305.jpg",
    icon: "palette-line",
    title: "Çini Atölyesi",
    description:
      "Geleneksel Türk çini sanatını yaşatan, hem üretim yapan hem de atölye çalışmaları düzenleyen bir sanat mekanı.",
    address: "Sultanahmet, Alemdar Cad. No:36, Fatih",
    instagram: "#",
    twitter: "#",
    tag: "2 Nisan Katılımcısı",
  },
];

const FeaturedBusinesses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Öne Çıkan İşletmeler
          </h2>
          <p className="text-lg text-gray-700">
            Topluluk tarafından sevilen ve desteklenen yerel işletmelerden bazıları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <BusinessCard key={index} {...business} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#map"
            className="bg-white text-primary border-2 border-primary px-8 py-4 font-semibold rounded-md whitespace-nowrap inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            Tüm İşletmeleri Görüntüle
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
