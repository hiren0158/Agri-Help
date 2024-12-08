import React from 'react';

const About = () => {
    return (
        <div className="bg-gradient-to-b from-green-100 via-green-50 to-white p-6 min-h-screen">
            <div className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-5xl font-extrabold text-green-700 mb-6">About AgriAssist</h1>
                <p className="text-xl text-gray-800 leading-relaxed mb-8">
                    At AgriAssist, we are committed to revolutionizing agriculture by providing modern tools
                    and resources to farmers. Our platform offers crop price updates, fertilizer information,
                    weather forecasts, and more to empower the agricultural community with knowledge and technology.
                </p>
                <div className="flex justify-center">
                    <img
                        src="/src/image.jpeg"
                        alt="About Us"
                        className="rounded-lg shadow-lg max-w-md object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
