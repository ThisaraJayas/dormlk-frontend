import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk("createPost",async(postData)=>{
    console.log(postData);
    try{
        const response = await axios.post(`http://localhost:8080/api/post`,postData)
        return response.data
    }catch(error){
        console.log("Create Post Error : ",error); 
        throw error
    }
    
})