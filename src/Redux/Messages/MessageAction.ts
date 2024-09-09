import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Message{
    postId: string;
    firstName: string;
    email: string;
    mobileNo: string;
    message: string
}
export const createMessage = createAsyncThunk("createMessage",async(messageDetails : Message)=>{
    console.log(messageDetails);
    const jwt = localStorage.getItem("jwt");
    if (!jwt) throw new Error("JWT not found");
    try{
        const {data} = await axios.post(`https://dormlk-frontend-1anh.vercel.app/api/messages`, messageDetails,{
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

export const fetchMessagesByUserId = createAsyncThunk("fetchMessagesByUserId",async(userId : string)=>{
    console.log("I ",userId);
    
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`https://dormlk-frontend-1anh.vercel.app/api/messages/user/${userId}`, {
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
export const fetchRecivedMessages = createAsyncThunk("fetchRecivedMessages",async(userId: string)=>{
 
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`https://dormlk-frontend-1anh.vercel.app/api/messages/received?userId=${userId}`, {
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