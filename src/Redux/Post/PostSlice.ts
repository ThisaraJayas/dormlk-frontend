import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchAllPosts, fetchPostByDistrict, filterPostBySearchFilter } from "./PostAction";

export interface Post{
    id:Number,
    title:string,
    description:string,
    location:string,
    facilities:[],
    suitableFor:[],
    closeByLocation:[],
    cityDistrict:string,
    accommodationType:string,
    availability:string,
    mobileContact: string;
    emailContact: string;
    whatsappContact: string;
    price: string;
    noOfBed:string;
    noOfBathroom:string;
    images: string[];
    user: {
        id: number;
        firstName: string;
        lastName: string;
    };
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
        builder.addCase(fetchPostByDistrict.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchPostByDistrict.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allPost=action.payload
        })
        builder.addCase(filterPostBySearchFilter.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(filterPostBySearchFilter.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allPost=action.payload
        })
        builder.addCase(filterPostBySearchFilter.rejected , (state)=>{
            state.status='failed'
        })
        builder.addCase(fetchAllPosts.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchAllPosts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allPost=action.payload
        })
        builder.addCase(fetchAllPosts.rejected , (state)=>{
            state.status='failed'
        })
    }

})
export default PostSlice.reducer