import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPostsAdmin = createAsyncThunk("getAllPostsAdmin",async()=>{
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data}=await axios.get(`http://localhost:8080/api/admin/allPosts`,{
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        return data
    }catch(error){
        console.log("Fetch Post by UserId Error : ",error);
    }
})

export const updatePostStatus = createAsyncThunk("updatePostStatus",async(postId, newStatus)=>{
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data}=await axios.put(`http://localhost:8080/api/admin/${postId}/status`,
            {status: newStatus},
            {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        return data
    }catch(error){
        console.log("Fetch Post by UserId Error : ",error);
    }
})