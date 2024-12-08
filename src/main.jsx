import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Home/Homepage.jsx';
import Layout from './Layout.jsx';
import CropPriceDetails from './CropPriceDetails.jsx';
import Pesticides from './components/Pesticides.jsx';
import Fertilizers from './components/Fertilizers.jsx';
import WeatherApp from './components/WeatherApp.jsx';
import './i18n';
import AgriNews from './components/AgriNews.jsx';
import Shop from './components/Shop.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import FAQ from './FAQ.jsx';
import Contact from './Contect.jsx';
// import Contact from './contact.jsx';


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contect" element={<Contact />} />
          <Route path="/crop-price-details" element={<CropPriceDetails />} />
          <Route path="/pesticides" element={<Pesticides />} />
          <Route path="/fertilizers" element={<Fertilizers />} />
          <Route path="/weather" element={<WeatherApp />} /> {/* Add weather route */}
          <Route path="/agri-news" element={<AgriNews />} />
          <Route path="/shop" element={<Shop />} /> {/* Correct route for Shop */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
