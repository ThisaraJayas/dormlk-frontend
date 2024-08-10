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
        const {data} = await axios.get(`http://localhost:8080/api/post/district/${district}`)
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

export const fetchAllPosts = createAsyncThunk("fetchAllPosts", async()=>{
    try{
        const {data} = await axios.get(`http://localhost:8080/api/post/allPosts`)
        return data
    }catch(error){
        console.log("Fetch Post Error : ",error); 
        throw error
    }
})

export const fetchPostByHouseType = createAsyncThunk("fetchPostByHouseType", async(accommodationType)=>{
    try{
        const {data} = await axios.get(`http://localhost:8080/api/post/accommodationType/${accommodationType}`)
        return data
    }catch(error){
        console.log("Fetch Post by Houe Type Error : ",error); 
    }
})

export const fetchPostsByUserId = createAsyncThunk("fetchPostsByUserId",async(userId)=>{
    try{
        const {data}=await axios.get(`http://localhost:8080/api/post/posts/${userId}`)
        return data
    }catch(error){
        console.log("Fetch Post by UserId Error : ",error);
    }
})

export const fetchPostsByPostId = createAsyncThunk("fetchPostsByPostId",async(postId)=>{
    try{
        const {data}=await axios.get(`http://localhost:8080/api/post/${postId}`)
        console.log(data);
        
        return data
    }catch(error){
        console.log("Fetch Post by UserId Error : ",error);
    }
})

export const DeleteByPostId = createAsyncThunk("DeleteByPostId",async(postId)=>{
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.delete(`http://localhost:8080/api/post/${postId}`,{
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        console.log(data);
        
        return data
    }catch(error){
        console.log("delete Post by PostId Error : ",error);
    }
})