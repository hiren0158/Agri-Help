import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CottonPesticides from "../assets/CottonPesticides.jpg";
import WheatPesticides from "../assets/Wheat.png"; 
import RicePesticides from "../assets/Ricepest.png"; 
import BGImage from "../assets/BG4.jpg"; 
const Pesticides = () => {
  const { t } = useTranslation();
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const pesticideDetails = {
    cotton: {
      image: CottonPesticides,
      name: t('Activated Neem Oil'),
      description: t('This pesticide is used to protect cotton crops from insects and other threats. The application method involves mixing the pesticide with water and spraying it on the crop.')
    },
    wheat: {
      image: WheatPesticides,
      name: t('AryaMono Pesticides'),
      description: t('AryaMono is a powerful pesticide specifically used for wheat crops to control pests and diseases, ensuring healthy growth and better yield.')
    },
    rice: {
      image: RicePesticides,
      name: t('Magic Pesticides'),
      description: t('Magic Pesticides is an effective solution for rice crops, protecting them from a variety of pests and ensuring healthy growth.')
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20" style={{ backgroundImage: `url(${BGImage})`, backgroundSize: 'cover' }}>
      <div className="bg-green-500 p-8 rounded-lg shadow-md w-full max-w-3xl mt-3">
        <h1 className="text-4xl mb-5 text-center">{t('Pesticides')}</h1>
        <div className="mb-5">
          <label htmlFor="crop" className="mr-2">{t('Select Crop')}:</label>
          <select
            id="crop"
            value={selectedCrop}
            onChange={handleCropChange}
            className="py-2 px-4 border rounded bg-green-300"
          >
            <option value="" disabled>{t('Select a crop')}</option>
            <option value="cotton">{t('Cotton')}</option>
            <option value="wheat">{t('Wheat')}</option>
            <option value="rice">{t('Rice')}</option>
          </select>
        </div>
        {selectedCrop && (
          <div className="flex flex-col md:flex-row items-center justify-center bg-green-300 p-6 rounded-lg shadow-lg">
            <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img src={pesticideDetails[selectedCrop].image} alt={pesticideDetails[selectedCrop].name} className="w-full h-auto rounded-lg" />
            </div>
            <div className="md:w-1/2 md:ml-4 text-center md:text-left">
              <h2 className="text-2xl mb-2">{pesticideDetails[selectedCrop].name}</h2>
              <p>{pesticideDetails[selectedCrop].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Pesticides;
