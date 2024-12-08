import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DAPImage from "../assets/DAP.png"; 
import UreaImage from "../assets/Urea.png"; 
import RiceImage from "../assets/Rice.png"; 
import BGImage from "../assets/BG4.jpg";

const Fertilizers = () => {
    const { t } = useTranslation();
    const [selectedCrop, setSelectedCrop] = useState('');

    const handleCropChange = (event) => {
        setSelectedCrop(event.target.value);
    };

    const fertilizerDetails = {
        cotton: {
            image: DAPImage,
            name: t('DAP Fertilizer'),
            description: t('DAP is a popular fertilizer used to supply phosphorus and nitrogen to crops. It is mixed with soil and used for cotton, rice, and wheat crops.')
        },
        rice: {
            image: RiceImage, 
            name: t('Suvarnabhumi Fertilizer'),
            description: t('Suvarnabhumi is a specialized fertilizer used to enhance the growth and yield of rice crops. It provides essential nutrients to boost rice production.')
        },
        wheat: {
            image: UreaImage,
            name: t('Urea Fertilizer'),
            description: t('Urea is a nitrogen-rich fertilizer used to promote the growth of crops like wheat, enhancing yield and quality.')
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-20" style={{ backgroundImage: `url(${BGImage})`, backgroundSize: 'cover' }}>
            <div className="bg-blue-500 p-8 rounded-lg shadow-md w-full max-w-3xl mt-3">
                <h1 className="text-4xl mb-5 text-center">{t('Fertilizers')}</h1>
                <div className="mb-5">
                    <label htmlFor="crop" className="mr-2">{t('Select Crop')}:</label>
                    <select
                        id="crop"
                        value={selectedCrop}
                        onChange={handleCropChange}
                        className="py-2 px-4 border rounded bg-blue-300"
                    >
                        <option value="" disabled>{t('Select a crop')}</option>
                        <option value="cotton">{t('Cotton')}</option>
                        <option value="rice">{t('Rice')}</option>
                        <option value="wheat">{t('Wheat')}</option>
                    </select>
                </div>
                {selectedCrop && (
                    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-300 p-6 rounded-lg shadow-lg">
                        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                            <img src={fertilizerDetails[selectedCrop].image} alt={fertilizerDetails[selectedCrop].name} className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="md:w-1/2 md:ml-4 text-center md:text-left">
                            <h2 className="text-2xl mb-2">{fertilizerDetails[selectedCrop].name}</h2>
                            <p>{fertilizerDetails[selectedCrop].description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Fertilizers;
