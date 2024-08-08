import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createMessage = createAsyncThunk("createMessage",async(messageDetails)=>{
    console.log(messageDetails);
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data} = await axios.post(`http://localhost:8080/api/messages`, messageDetails,{
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        console.log("Meesage Send Data ",data);
        
        return data

    }catch(error){
        console.log("Create Message Error : ",error); 
        throw error
    }
    
})

export const fetchMessagesByUserId = createAsyncThunk("fetchMessagesByUserId",async(userId)=>{
    console.log("I ",userId);
    
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`http://localhost:8080/api/messages/messages/${userId}`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        console.log("Mes ",data);
        
        return data
    }catch(error){
        console.log("Fetch messages by UserId Error : ",error);
    }
})
export const fetchRecivedMessages = createAsyncThunk("fetchRecivedMessages",async(userId)=>{
 
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`http://localhost:8080/api/messages/received?userId=${userId}`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        console.log("Mes ",data);
        
        return data
    }catch(error){
        console.log("Fetch messages Error : ",error);
    }
})