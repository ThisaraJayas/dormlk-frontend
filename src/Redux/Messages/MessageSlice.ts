import { createSlice } from "@reduxjs/toolkit";
import { createComment } from "../Comment/CommentAction";

export interface Message{
    id:number,
    fullName:string,
    email: string,
    mobileNo:number,
    createdDateTime: Date,
    message:string,
    user: {
        id: number;
        firstName: string;
        lastName: string;
    };
}

interface MessageState{
    message:Message,
    allMessage:Message[]
    status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState:MessageState={
    message: undefined,
    allMessage: [],
    status: "idle"
}
export const MessageSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createComment.pending,(state,action)=>{
            state.status='loading'
        })
        builder.addCase(createComment.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.message=action.payload
        })
    }

})
export default MessageSlice.reducer