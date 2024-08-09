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
    console.log(userData);
    
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

export const getUser = createAsyncThunk("getUser", async()=>{
    try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");

        const { data } = await axios.get(`http://localhost:8080/api/user/profile`, {
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

export const passwordChange = createAsyncThunk("passwordChange", async(newPassword)=>{
    console.log(newPassword);
    
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data} = await axios.put(`http://localhost:8080/api/user/change-password/${newPassword}`,
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