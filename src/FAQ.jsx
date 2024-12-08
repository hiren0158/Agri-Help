import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: 'How do I check crop prices?',
            answer: 'Visit the Crop Prices section for real-time updates.',
        },
        {
            question: 'How can I buy fertilizers?',
            answer: 'You can explore and purchase fertilizers in our online shop.',
        },
        {
            question: 'Do you provide weather updates?',
            answer: 'Yes, our platform offers real-time weather forecasts.',
        },
        {
            question: 'Can I get expert advice?',
            answer: 'Yes, you can contact our experts via the Contact Us page.',
        },
    ];

    return (
        <div className="bg-gradient-to-b from-green-200 via-green-100 to-white p-6 min-h-screen">
            <div className="max-w-4xl mx-auto text-center py-12">
                <h1 className="text-5xl font-extrabold text-green-800 mb-8">
                    Frequently Asked Questions
                </h1>
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-white to-green-50 border border-green-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-2xl font-bold text-green-700">{faq.question}</h2>
                            <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
