import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const cityFiles = {
  Gondal: {
    en: '/Gondal.json',
    gu: '/Gondalguj.json',
    hi: '/Gondalhi.json',
  },
  Amreli: {
    en: '/Amreli.json',
    gu: '/AmreliGuj.json',
    hi: '/Amrelihi.json',
  },
 
};

const CropPriceDetails = () => {
  const { t, i18n } = useTranslation();
  const [cropData, setCropData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    if (selectedCity) {
      const lang = i18n.language; // Get current language
      const filePath = cityFiles[selectedCity][lang]; // Get file path based on the selected city and language

      fetch(filePath)
        .then((response) => response.json())
        .then((data) => {
          setCropData(data);
        })
        .catch((err) => {
          console.error('Error loading crop data:', err);
        });
    }
  }, [selectedCity, i18n.language]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-crop-price-bg bg-cover bg-center bg-fixed">
      <div className="bg-green-100 bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-4xl mb-5 text-center">{t('Crop Price')}</h1>
        <div className="text-center mb-5">
          <label htmlFor="city" className="mr-2">{t('Select City')}:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="py-2 px-4 border rounded"
          >
            <option value="" disabled>{t('Select a city')}</option>
            {Object.keys(cityFiles).map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        {selectedCity && (
          <table className="min-w-full bg-white bg-opacity-90 border text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border">{t('Crop Name')}</th>
                <th className="py-2 px-4 border">{t('Price (Rs)')}</th>
                <th className="py-2 px-4 border">{t('Unit')}</th>
              </tr>
            </thead>
            <tbody>
              {cropData.map((crop, index) => {
                const Icon = Icons[crop.icon];
                return (
                  <tr key={index}>
                    <td className="py-2 px-4 border flex items-center justify-center">
                      {Icon && <Icon className="mr-2" />} {crop.name}
                    </td>
                    <td className="py-2 px-4 border">{crop.price}</td>
                    <td className="py-2 px-4 border">{crop.unit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div className="text-center mt-5">
          <Link
            to="/"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {t('Back to Home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropPriceDetails;
