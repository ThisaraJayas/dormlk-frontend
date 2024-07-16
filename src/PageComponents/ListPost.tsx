import "../styles/post.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, useCallback } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Map from "./Map";

export function ListPost() {
  const [location, setLocation] = useState(null); // State to store selected location

  const handleLocationSelect = useCallback((place) => {
    setLocation(place); // Set selected location
    console.log(place); // Log the selected place for debugging
  }, []);

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
      
      <div className=" lg:block hidden h-full">
        <div className="fixed-image">
          <Map /> {/* Render the Map component instead of the image */}
        </div>
      </div>
    </div>
  );
}
