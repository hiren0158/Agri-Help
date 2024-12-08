import React from 'react';

const Service = () => {
    const services = [
        {
            title: 'Real-Time Crop Prices',
            description: 'Get accurate and updated crop prices to make informed decisions.',
            icon: '🌾',
        },
        {
            title: 'Fertilizer & Pesticide Info',
            description: 'Access detailed information on fertilizers and pesticides for better farming.',
            icon: '💡',
        },
        {
            title: 'Weather Updates',
            description: 'Stay ahead with real-time weather forecasts tailored for your region.',
            icon: '☁️',
        },
        {
            title: 'Agri News',
            description: 'Stay informed with the latest news and trends in the agricultural sector.',
            icon: '📰',
        },
        {
            title: 'Online Agri Shop',
            description: 'Purchase seeds, fertilizers, and equipment directly from our shop.',
            icon: '🛒',
        },
    ];

    return (
        <div className="bg-green-50 p-6 min-h-screen">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold text-green-700 mb-8">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h2 className="text-2xl font-semibold text-green-700">{service.title}</h2>
                            <p className="text-gray-700 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
