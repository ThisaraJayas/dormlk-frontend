import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNav from "./HomeNav";
import "../styles/home.css";
import DefaulltHeader from "./DefaulltHeader";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { filterPostBySearchFilter } from "@/Redux/Post/PostAction";

export default function HomeHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const [accommodationType, setAccommodationType] = useState('');
  const [district, setDistrict] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleScroll = () => {
    // Check if scrolled past half the window height
    if (window.scrollY > window.innerHeight / 2) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSearch = () => {
    // Navigate with query params
    navigate(`/store?accommodationType=${accommodationType}&district=${district}`);
    // Dispatch action to fetch posts
    dispatch(filterPostBySearchFilter({ district, accommodationType }));
  };
  return (
    <div>
      <div className="fixed-background"></div>
      <div className="pt-0">
        <div className="homeContainer">
          <div className="banner">
            {/* <HomeNav /> 
            {showHeader && <DefaulltHeader />}{" "}
            Show DefaulltHeader if scrolled */}
            <div className="bannerSection sm:px-4">
  <div className="filterBanner m-40 inline-block max-w-4xl mx-auto">
    <div className="rounded-xl border border-gray-200 bg-white p-6 pl-12 pr-12 shadow-lg">
      
      <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex flex-col">
          <label
            htmlFor="accommodation"
            className="text-stone-600 text-sm font-medium"
          >
            Accommodation
          </label>
          <Select onValueChange={setAccommodationType}>
            <SelectTrigger className="w-full min-w-[200px] bg-gray-200 border-none">
              <SelectValue placeholder="Accommodation Type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-200">
              <SelectItem
                value="Annex"
                className="bg-gray-200 hover:bg-gray-300"
              >
                Annex
              </SelectItem>
              <SelectItem
                value="dark"
                className="bg-gray-200 hover:bg-gray-300"
              >
                Dark
              </SelectItem>
              <SelectItem
                value="system"
                className="bg-gray-200 hover:bg-gray-300"
              >
                System
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="district"
            className="text-stone-600 text-sm font-medium"
          >
            District
          </label>
          <Select onValueChange={setDistrict}>
            <SelectTrigger className="w-full min-w-[200px] bg-gray-200 border-none">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent className="bg-gray-200">
              <SelectItem
                value="Colombo"
                className="bg-gray-200 hover:bg-gray-300"
              >
                Colombo
              </SelectItem>
              <SelectItem
                value="dark"
                className="bg-gray-200 hover:bg-gray-300"
              >
                Dark
              </SelectItem>
              <SelectItem
                value="system"
                className="bg-gray-200 hover:bg-gray-300"
              >
                System
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="active:scale-95 rounded-lg bg-emerald-500 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90 w-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
        {/* Add enough content to scroll */}
        <div style={{ height: "200vh" }} />
      </div>
    </div>
  );
}
