import "../styles/post.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useCallback } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Map from "./Map";

export const facilities=[
    "Aircondition","Wi-Fi","Gym"
]

export function ListPost() {
  const [location, setLocation] = useState(null); // State to store selected location
  const [postData,setPostData]=useState({
    title:String,
    location:String,
    description:String,
    facilities:[]
  })

  const handleLocationSelect = useCallback((place) => {
    setLocation(place); // Set selected location
    console.log(place); // Log the selected place for debugging
  }, []);

  const handleFacilitiesChange = (newValue) => {
    const currentFacilities = postData.facilities;
    const updatedFacilities = currentFacilities.includes(newValue)
      ? currentFacilities.filter(facility => facility !== newValue)
      : [...currentFacilities, newValue];

    setPostData(prev => ({
      ...prev,
      facilities: updatedFacilities
    }));
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Label htmlFor="facilities">Facilities</Label>
            <div className="flex flex-wrap gap-2 mb-4">
              {postData.facilities.map((facility, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded">
                  {facility}
                </span>
              ))}
            </div>
            <Select onValueChange={handleFacilitiesChange}>
              <SelectTrigger className="w-full">
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
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  value: location,
                  onChange: handleLocationSelect,
                  placeholder: "Search for a location...",
                }}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      
      <div className="lg:block hidden h-full">
        <div className="fixed-image">
          <Map location={location} /> {/* Pass the location to the Map component */}
        </div>
      </div>
    </div>
  );
}
