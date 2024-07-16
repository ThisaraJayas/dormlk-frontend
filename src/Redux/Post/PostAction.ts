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