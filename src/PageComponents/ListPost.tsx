import "../styles/post.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useCallback } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Map from "./Map";
import { Textarea } from "@/components/ui/textarea"
import '../styles/postform.css'

export const facilities = [
    "Aircondition", "Wi-Fi", "Gym","Cooking","Parking"
];

export function ListPost() {
    const [location, setLocation] = useState(null);
    const [postData, setPostData] = useState({
        title: "",
        location: "",
        description: "",
        facilities: []
    });

    const handleLocationSelect = useCallback((place) => {
        setLocation(place);
        console.log(place);
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
        <div className="w-full mt-6 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">List Your Property</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your property below to get started.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Title</Label>
                            <Input
                                id="title"
                                type="title"
                                placeholder="Enter your property title"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Description</Label>
                            </div>
                            <Textarea  style={{ height: '150px' }}   placeholder="Enter your property description here." />
                        </div>
                        <Label htmlFor="facilities">Facilities</Label>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {postData.facilities.map((facility, index) => (
                                <span key={index} className="bg-emerald-400 text-white px-2 py-1 rounded">
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
                                    classNamePrefix: "custom-select",
                                    onError: (status, clearSuggestions) => {
                                        console.error('Error from Google Maps API', status); 
                                        clearSuggestions(); 
                                    }
                                }}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                            List My Place
                        </Button>
                    </div>
                    
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
