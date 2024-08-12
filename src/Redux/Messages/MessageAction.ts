import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Message{
    id: number;
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
        const {data} = await axios.post(`https://dormlk-production.up.railway.app/api/messages`, messageDetails,{
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

export const fetchMessagesByUserId = createAsyncThunk("fetchMessagesByUserId",async(userId : number)=>{
    console.log("I ",userId);
    
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`https://dormlk-production.up.railway.app/api/messages/messages/${userId}`, {
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
export const fetchRecivedMessages = createAsyncThunk("fetchRecivedMessages",async(userId: number)=>{
 
    try{
        const jwt = localStorage.getItem("jwt");
        if (!jwt) throw new Error("JWT not found");
        const {data}=await axios.get(`https://dormlk-production.up.railway.app/api/messages/received?userId=${userId}`, {
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