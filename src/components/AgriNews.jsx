import React from 'react';
import BG4 from "../assets/BG4.jpg"; // Adjust path to BG4 image

const AgriNews = () => {
    const videos = [
        ,
        "https://www.youtube.com/embed/G46QRODvbqM?si=eF9Gk8-pCzU0v4EJ",
       
        "https://www.youtube.com/embed/lgZBlD-TCFE?si=j8mCCwfp10QFd_kY",
        "https://www.youtube.com/embed/1XtNDwXGD-4?si=Z00fHfVxf06AFoQn",
        "https://www.youtube.com/embed/8hr_w_8vbG0?si=dvXC86rOd7u9CO6L",
        "https://www.youtube.com/embed/gTTdc3IY7og?si=TnXmscsshK6A-w9U"
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
            style={{ backgroundImage: `url(${BG4})` }}
        >
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-600 to-green-500 text-center mt-11 mb-7">
                Agri News
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-white via-gray-100 to-gray-50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-50 hover:via-white hover:to-blue-50"
                    >
                        <iframe
                            src={video}
                            title={`Agri News Video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-64 md:h-80 rounded-t-2xl"
                        />
                        <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center rounded-b-2xl">
                            <h2 className="text-lg font-bold">Video {index + 0}</h2>
                            <p className="text-sm">Stay updated with the latest agricultural news.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgriNews;
