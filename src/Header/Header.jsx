// Header.jsx

import React, { useState, useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Buttons from './List';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='bg-green-700 h-[10vh] fixed w-full p-2 flex justify-between items-center text-lg text-white z-10'>
            <div className="text-2xl font-bold">AgriAssist</div>
            <div className="md:hidden" onClick={toggleMenu}>
                {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </div>
            <ul className={`flex-col md:flex-row fixed md:static top-[10vh] md:top-0 left-0 bg-green-700 w-full md:w-auto ${isOpen ? 'flex' : 'hidden'} md:flex gap-4 md:gap-12 justify-center items-center`} ref={menuRef}>
                <li className='p-2'><NavLink to="/home"><Buttons name={t("Home")} /></NavLink></li>
                <li className='p-2'><NavLink to="/about"><Buttons name={t("About")} /></NavLink></li>
                <li className='p-2'><NavLink to="/faq"><Buttons name={t("FAQ")} /></NavLink></li>
                <li className='p-2'><NavLink to="/service"><Buttons name={t("Service")} /></NavLink></li>
                <li className='p-2'><NavLink to="/contect"><Buttons name={t("Contect")} /></NavLink></li>
                <li className='p-2 flex'>
                    <button onClick={() => changeLanguage('en')} className="mr-2 bg-gray-400 py-1 px-2 rounded">English</button>
                    <button onClick={() => changeLanguage('hi')} className="mr-2 bg-gray-400 py-1 px-2 rounded">हिंदी</button>
                    <button onClick={() => changeLanguage('gu')} className="bg-gray-400 py-1 px-2 rounded">ગુજરાતી</button>
                </li>
            </ul>
        </div>
    );
}
