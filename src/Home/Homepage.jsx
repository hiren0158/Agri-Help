import React from 'react';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import cropPriceImage from '../assets/CropPrice.jpg'; 
import presticidesImage from '../assets/Presticides.jpg'; 
import FertilizerImage from '../assets/Fertilizer.jpg'; 
import AgriNewsImage from '../assets/AgriNews.jpg'; 
import BuypresticidesImage from '../assets/Buy.jpg'; 
import WeatherImage from '../assets/Weather.jpg'; 


const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[92vh] flex-grow pt-20 bg-purple-200">
      <div className="features container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        <Card header={t("Crop Price")} content={t("Get expert advice on crop selection and management.")} imageUrl={cropPriceImage} />
        <Card header={t("Pesticides")} content={t("Suggestion")} imageUrl={presticidesImage} />
        <Card header={t("Fertilizer")} content={t("Check the current market prices for various crops.")} imageUrl={FertilizerImage} />
        <Card header={t("Agri News")} content={t("Get the latest news in agriculture.")} imageUrl={AgriNewsImage} />
        <Card header={t("Buy Pesticides and Fertilizer")} content={t("Purchase fertilizers and pesticides.")} imageUrl={BuypresticidesImage} />
        <Card header={t("Weather")} content={t("Follow the weather updates.")} imageUrl={WeatherImage} />
      </div>
    </div>
  );
};

export default Homepage;
