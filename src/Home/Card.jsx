import React from 'react';
import { useNavigate } from 'react-router-dom';


const Card = ({ header, content, imageUrl }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    if (header === 'Crop Price' || header === 'પાક ના ભાવ' || header === 'फसल मूल्य') {
      navigate('/crop-price-details');
    } else if (header === 'Pesticides' || header === 'કીટનાશકો' || header === 'कीटनाशक') {
      navigate('/pesticides');
    } else if (header === 'Fertilizer' || header === 'ખાતર' || header === 'उर्वरक') {
      navigate('/Fertilizers');
    }
    else if (header === 'Weather' || header === 'મોસમ' || header === 'मौसम') {
      // Add condition for Weather card
      navigate('/weather');
    }
    else if (header === 'Agri News' || header === 'મોસમ' || header === 'मौसम') {
      // Add condition for Weather card
      navigate('/agri-news');
    }
    else if (header === 'Buy Pesticides and Fertilizer' || header === 'મોસમ' || header === 'मौसम') {
      // Add condition for Weather card
      navigate('/shop');
    }

    // Add more conditions for other headers if needed
  };

  return (

    <div className="feature bg-green-300 border border-gray-300 rounded-lg p-3 shadow-md flex flex-col justify-center items-center" >
      <div className="flex justify-center items-center mb-2">
        <img src={imageUrl} alt={header} className="w-60 h-40 object-cover rounded-lg mb-2" />
      </div>
      <h2 className="text-lg text-center">{header}</h2>
      <button
        className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition text-sm"
        onClick={handleLearnMoreClick}
      >
        Check Now
      </button>
    </div>

  );
};

export default Card;
