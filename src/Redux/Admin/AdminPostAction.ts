import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsByUserId = createAsyncThunk("fetchPostsByUserId",async(userId)=>{
    try{
        const {data}=await axios.get(`http://localhost:8080/api/post/posts/${userId}`)
        return data
    }catch(error){
        console.log("Fetch Post by UserId Error : ",error);
    }
})