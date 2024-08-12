import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export interface Login {
    email: string;
    password: string;
}

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export const register = createAsyncThunk("register", async (userData: Register) => {
    console.log(userData);
    
    try {
        const { data } = await axios.post(`https://dormlk-production.up.railway.app/auth/register`, userData);
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

export const login = createAsyncThunk("login", async(userData : Login)=>{
    console.log(userData);
    
    try{
        const {data} = await axios.post(`https://dormlk-production.up.railway.app/auth/login`,userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        return data
    }catch(error){
        console.log("Error Occured: ", error);
        throw error
        
    }
})

export const getUser = createAsyncThunk("getUser", async()=>{
    try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");

        const { data } = await axios.get(`https://dormlk-production.up.railway.app/api/user/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        console.log("User Success ", data);
        return data;
    } catch (error) {
        console.log("Error Occured: ", error);
        throw error;
    }
})

export const passwordChange = createAsyncThunk("passwordChange", async(newPassword :string)=>{
    console.log(newPassword);
    
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data} = await axios.put(`https://dormlk-production.up.railway.app/api/user/change-password/${newPassword}`,
            { }, 
            {
              headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
              }
            })
            console.log("New Password : ",data);
        return data
    }catch(error){
        console.log("Error Occured: ", error);
        throw error
        
    }
})

export const logout = createAsyncThunk("logout", async()=>{
    localStorage.clear()
})