import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./PostAction";

export interface Post{
    id:Number,
    title:string,
    description:string,
    location:string,
    facilities:[]
}
interface PostState{
    post:Post,
    allPost:Post[]
    status: "idle" | "loading" | "succeeded" | "failed"
}
const initialState:PostState={
    post: undefined,
    allPost: [],
    status: "idle"
}
export const PostSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createPost.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(createPost.fulfilled,(state, action)=>{
            state.status='succeeded',
            state.post=action.payload
        })
        builder.addCase(createPost.rejected,(state)=>{
            state.status='failed'
        })
    }

})
export default PostSlice.reducer