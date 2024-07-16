import "../styles/post.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useCallback } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Map from "./Map";
import { Textarea } from "@/components/ui/textarea";
import "../styles/postform.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { createPost } from "@/Redux/Post/PostAction";

export const facilities = [
  "Aircondition",
  "Wi-Fi",
  "Gym",
  "Cooking",
  "Parking",
];
export const closeByLocation = [
  "SLIIT",
  "Horizon Campus",
  "Univercity of Colombo",
  "Univercity of Moratuwa",
];
export const suitableFor = ["Boys", "Girls", "Both"];

export function ListPost() {
  const [location, setLocation] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    contact: "",
    availability: "available",
    accommodationType: "",
    closeByLocation: [],
    suitableFor: [],
    facilities: [],
  });
  const dispatch = useDispatch<AppDispatch>();
  const {} = useSelector((state: RootState) => state.Post);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const handleLocationSelect = useCallback((place) => {
    setLocation(place);
    setPostData((prev) => ({ ...prev, location: place.label }));
    console.log(place);
  }, []);

  const handleFacilitiesChange = (newValue) => {
    const currentFacilities = postData.facilities;
    const updatedFacilities = currentFacilities.includes(newValue)
      ? currentFacilities.filter((facility) => facility !== newValue)
      : [...currentFacilities, newValue];

    setPostData((prev) => ({
      ...prev,
      facilities: updatedFacilities,
    }));
  };
  const handleCloseByLocation = (newValue) => {
    const currentCloseLocation = postData.closeByLocation;
    const updatedCloseLocation = currentCloseLocation.includes(newValue)
      ? currentCloseLocation.filter((facility) => facility !== newValue)
      : [...currentCloseLocation, newValue];

    setPostData((prev) => ({
      ...prev,
      closeByLocation: updatedCloseLocation,
    }));
  };

  const handleSuitableFor = (newValue) => {
    const currentSuitableFor = postData.suitableFor;
    const updatedSuitableFor = currentSuitableFor.includes(newValue)
      ? currentSuitableFor.filter((facility) => facility !== newValue)
      : [...currentSuitableFor, newValue];

    setPostData((prev) => ({
      ...prev,
      suitableFor: updatedSuitableFor,
    }));
  };
  const handleSelectChange = (value: string) => {
    setPostData((prevState) => ({
      ...prevState,
      availability: value,
    }));
  };

  return (
    <div className="w-full mt-8 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">List Your Property</h1>
            <p className="text-balance text-muted-foreground">
              Enter your property below to get started.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Title</Label>
              <Input
                id="title"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
                type="title"
                placeholder="Enter your property title"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Description</Label>
              </div>
              <Textarea
                value={postData.description}
                onChange={(e) =>
                  setPostData({ ...postData, description: e.target.value })
                }
                placeholder="Enter your property description here."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="facilities">Facilities</Label>
              <div className={`flex flex-wrap gap-2 ${postData.facilities.length === 0 ? '' : 'mb-2'}`}>
                {postData.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-emerald-400 text-white px-2 py-1 rounded"
                  >
                    {facility}
                  </span>
                ))}
              </div>
              <Select onValueChange={handleFacilitiesChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Facilities" />
                </SelectTrigger>
                <SelectContent>
                  {facilities.map((facility) => (
                    <SelectItem key={facility} value={facility}>
                      {facility}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  value: location,
                  onChange: handleLocationSelect,
                  placeholder: "Search for a location...",
                  classNamePrefix: "custom-select",
                  onError: (status, clearSuggestions) => {
                    console.error("Error from Google Maps API", status);
                    clearSuggestions();
                  },
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="closeByLocation">Close By Location</Label>
              <div className={`flex flex-wrap gap-2 ${postData.closeByLocation.length === 0 ? '' : 'mb-2'}`}>
                {postData.closeByLocation.map((closeLocation, index) => (
                  <span
                    key={index}
                    className="bg-emerald-400 text-white px-2 py-1 rounded"
                  >
                    {closeLocation}
                  </span>
                ))}
              </div>
              <Select onValueChange={handleCloseByLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location close to" />
                </SelectTrigger>
                <SelectContent>
                  {closeByLocation.map((closeLocation) => (
                    <SelectItem key={closeLocation} value={closeLocation}>
                      {closeLocation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
           
            <div className="grid gap-2">
              <Label htmlFor="suitableFor">Suitable mostly for</Label>
              <div className={`flex flex-wrap gap-2 ${postData.suitableFor.length === 0 ? '' : 'mb-2'}`}>
                {postData.suitableFor.map((suitableFor, index) => (
                  <span
                    key={index}
                    className="bg-emerald-400 text-white px-2 py-1 rounded"
                  >
                    {suitableFor}
                  </span>
                ))}
              </div>
              <Select onValueChange={handleSuitableFor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select suitable for" />
                </SelectTrigger>
                <SelectContent>
                  {suitableFor.map((suitableFor) => (
                    <SelectItem key={suitableFor} value={suitableFor}>
                      {suitableFor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="avaliablility">Select the availability</Label>
              <Select
                onValueChange={handleSelectChange}
                defaultValue={postData.availability}
              >
                <SelectTrigger >
                  <SelectValue placeholder={postData.availability} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Availability</SelectLabel>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="not_available">Not Available</SelectItem>
                    <SelectItem value="soon_available">
                      Soon Available
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p className="text-muted-foreground font-semibold">
              Enter Contact Information
            </p>
            <div className="grid gap-2">
              <Label htmlFor="mobileNo">Mobile Number</Label>
              <Input
                id="mobileno"
                value={postData.contact}
                onChange={(e) =>
                  setPostData({ ...postData, contact: e.target.value })
                }
                type="mobileno"
                placeholder="Enter your mobile no"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              List My Place
            </Button>
          </form>
        </div>
      </div>

      <div className="lg:block hidden h-full">
        <div className="fixed-image">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
}
