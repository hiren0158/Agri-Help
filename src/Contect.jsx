import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Redirect to Gmail compose email
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hirenn158@gmail.com&su=Agriculture%20Help&body=Name:%20${encodeURIComponent(
            formData.name
        )}%0AEmail:%20${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(
            formData.message
        )}`;

        // Open Gmail link in a new tab
        window.open(gmailLink, '_blank');
    };

    return (
        <div className="bg-gradient-to-b from-green-100 to-white p-6 min-h-screen m-25">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg m-12">
                <h1 className="text-5xl font-extrabold text-green-700 mb-6 text-center">
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-700 text-white py-2 px-4 rounded-lg shadow hover:bg-green-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
