import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk("createPost",async(postData)=>{
    console.log(postData);
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data} = await axios.post(`http://localhost:8080/api/post`,postData,{
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        return data
    }catch(error){
        console.log("Create Post Error : ",error); 
        throw error
    }
    
})

export const fetchPostByDistrict = createAsyncThunk("fetchPostByDistrict", async(district)=>{
    try{
        const {data} = await axios.get(`http://localhost:8080/api/post/${district}`)
        return data
    }catch(error){
        console.log("Fetch Post by district Error : ",error); 
        throw error
    }
})

export const filterPostBySearchFilter = createAsyncThunk("filterPostBySearchFilter", async({district, accommodationType})=>{
    try{
        const {data} = await axios.get(`http://localhost:8080/api/post/search`, 
            {
                params: {district, accommodationType},
            }
        )
        return data
    }catch(error){
        console.log("Fetch by search error ",error);
        throw error;
    }
})