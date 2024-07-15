import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import '../styles/home.css';
import DefaulltHeader from './DefaulltHeader';
import { Search } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

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
                        <div className='bannerSection sm:px-4'>
                        <Select>
                                <SelectTrigger className="w-[180px] bg-gray-200 border-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-200">
                                    <SelectItem value="light" className="bg-gray-200 hover:bg-gray-300">Light</SelectItem>
                                    <SelectItem value="dark" className="bg-gray-200 hover:bg-gray-300">Dark</SelectItem>
                                    <SelectItem value="system" className="bg-gray-200 hover:bg-gray-300">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-gray-200 border-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-200">
                                    <SelectItem value="light" className="bg-gray-200 hover:bg-gray-300">Light</SelectItem>
                                    <SelectItem value="dark" className="bg-gray-200 hover:bg-gray-300">Dark</SelectItem>
                                    <SelectItem value="system" className="bg-gray-200 hover:bg-gray-300">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-gray-200 border-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-200">
                                    <SelectItem value="light" className="bg-gray-200 hover:bg-gray-300">Light</SelectItem>
                                    <SelectItem value="dark" className="bg-gray-200 hover:bg-gray-300">Dark</SelectItem>
                                    <SelectItem value="system" className="bg-gray-200 hover:bg-gray-300">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-gray-200 border-none">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-200">
                                    <SelectItem value="light" className="bg-gray-200 hover:bg-gray-300">Light</SelectItem>
                                    <SelectItem value="dark" className="bg-gray-200 hover:bg-gray-300">Dark</SelectItem>
                                    <SelectItem value="system" className="bg-gray-200 hover:bg-gray-300">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <button className="bg-emerald-500 text-white rounded-full p-3 flex items-center justify-center hover:bg-emerald-600 transition">
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Add enough content to scroll */}
                <div style={{ height: '200vh' }} />
            </div>
        </div>
    );
}
