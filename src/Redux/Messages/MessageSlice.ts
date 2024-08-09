import { createSlice } from "@reduxjs/toolkit";
import { createComment } from "../Comment/CommentAction";
import { createMessage, fetchMessagesByUserId, fetchRecivedMessages } from "./MessageAction";

export interface Message{
    id:number,
    fullName:string,
    email: string,
    mobileNo:number,
    createdDateTime: Date,
    message:string,
    user: {
        id: number;
        email:string;
        firstName: string;
        lastName: string;
    };
    replies:{
        id:number,
        reply:string,
        createdDateTime: Date,
    }
    post:{
        id:number,
        title:string,
        cityDistrict:string,
        user:{
            id: number;
            email:string;
            firstName: string;
            lastName: string;
        }
    }
}

interface MessageState{
    message:Message,
    allMessage:Message[],
    messagesRecived:Message[],
    status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState:MessageState={
    message: undefined,
    allMessage: [],
    status: "idle",
    messagesRecived: []
}
export const MessageSlice = createSlice({
    name:"messages",
    initialState,
    reducers:{
        // Action to add a reply to a specific message
        updateMessageWithReply: (state, action) => {
            const { messageId, reply } = action.payload;
            const message = state.allMessage.find(msg => msg.id === messageId);
            if (message) {
                message.replies.push(reply);
            }
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(createMessage.pending,(state,action)=>{
            state.status='loading'
        })
        builder.addCase(createMessage.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allMessage.push(action.payload);
        })
        builder.addCase(fetchMessagesByUserId.pending,(state,action)=>{
            state.status='loading'
        })
        builder.addCase(fetchMessagesByUserId.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allMessage=action.payload
        })
        builder.addCase(fetchRecivedMessages.pending,(state,action)=>{
            state.status='loading'
        })
        builder.addCase(fetchRecivedMessages.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.messagesRecived=action.payload
        })
    }

})
export const { updateMessageWithReply } = MessageSlice.actions;
export default MessageSlice.reducer