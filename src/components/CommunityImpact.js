'use client';

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const CommunityImpact = () => {
  useEffect(() => {
    const chartDom = document.getElementById('chartContainer');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
      animation: false,
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#e5e5e5',
        textStyle: {
          color: '#1f2937',
        },
      },
      legend: {
        top: 'bottom',
        left: 'center',
        textStyle: {
          color: '#1f2937',
        },
      },
      series: [
        {
          name: 'İşletme Kategorileri',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 78, name: 'Kafeler', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
            { value: 65, name: 'Restoranlar', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
            { value: 42, name: 'Bakkallar', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
            { value: 38, name: 'Zanaatkarlar', itemStyle: { color: 'rgba(252, 141, 98, 1)' } },
            { value: 24, name: 'Diğer', itemStyle: { color: '#a3a3a3' } },
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => myChart.resize());

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Topluluk Etkimiz</h2>
          <p className="text-lg text-gray-700">
            Dear Locals olarak yerel işletmelere sağladığımız destek ve yarattığımız etki
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
            <div className="text-4xl font-bold text-primary mb-2">247</div>
            <div className="text-lg text-gray-600">Kayıtlı İşletme</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
            <div className="text-4xl font-bold text-primary mb-2">15.823</div>
            <div className="text-lg text-gray-600">Harita Ziyareti</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center">
            <div className="text-4xl font-bold text-primary mb-2">%82</div>
            <div className="text-lg text-gray-600">2 Nisan Katılım Oranı</div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-primary mb-6">İşletme Kategorileri Dağılımı</h3>
          <div id="chartContainer" className="h-80 w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
