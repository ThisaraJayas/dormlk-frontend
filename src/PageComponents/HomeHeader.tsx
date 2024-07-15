import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import '../styles/home.css';
import DefaulltHeader from './DefaulltHeader';

export default function HomeHeader() {
    const [showHeader, setShowHeader] = useState(false);

    const handleScroll = () => {
        // Check if scrolled past half the window height
        if (window.scrollY > window.innerHeight / 2) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='pt-0'>
                <div className='homeContainer'>
                    <div className='banner'>
                        <HomeNav /> {/* Always show HomeNav */}
                        {showHeader && <DefaulltHeader />} {/* Show DefaulltHeader if scrolled */}
                        <div className='bannerSection'>
                            <div className='bannerText'>
                                <p className='title'>
                                    Home Comfort Experts for<br />
                                    Cooling, Heating, Electrical,<br />
                                    Security and Plumbing
                                </p>
                                <div className='btn ml-1'>
                                    <Link to={'/appointments'}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-14 py-2.5 text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Appointment
                                            </span>
                                        </button>
                                    </Link>
                                    <Link to={'/store'}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-base font-medium rounded-lg px-7 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Store
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add enough content to scroll */}
                <div style={{ height: '200vh' }} />
            </div>
        </div>
    );
}
