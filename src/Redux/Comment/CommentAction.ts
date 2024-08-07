import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createComment = createAsyncThunk("createComment",async(content)=>{
    console.log(content);
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data} = await axios.post(`http://localhost:8080/api/comments`, content,{
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        return data
    }catch(error){
        console.log("Create Comment Error : ",error); 
        throw error
    }
    
})

export const fetchCommentsByPostId = createAsyncThunk("fetchCommentsByPostId",async(postId)=>{
    console.log("PPP ",postId);
    
    try{
        const {data}=await axios.get(`http://localhost:8080/api/comments/${postId}`)
        return data
    }catch(error){
        console.log("Fetch Comments by PostId Error : ",error);
    }
})