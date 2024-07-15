import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("register", async (userData) => {
    console.log(userData);
    
    try {
        const { data } = await axios.post(`http://localhost:8080/auth/register`, userData);
        console.log(data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        return data;
    } catch (error) {
        console.log("Error Occurred: ", error);
        throw error; // Optionally throw the error for handling in your slice
    }
});

export const login = createAsyncThunk("login", async(userData)=>{
    try{
        const {data} = await axios.post(`http://localhost:8080/auth/login`,userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        return data
    }catch(error){
        console.log("Error Occured: ", error);
        throw error
        
    }
})