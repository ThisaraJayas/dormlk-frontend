import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchAllPosts, fetchPostByDistrict, fetchPostByHouseType, fetchPostsByUserId, filterPostBySearchFilter } from "./PostAction";

export interface Post{
    id:number,
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
    postStatus: string;
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
    allPostByHouseType:Post[]
    allPostByUserId:Post[]
    status: "idle" | "loading" | "succeeded" | "failed"
}
const initialState:PostState={
    post: undefined,
    allPost: [],
    status: "idle",
    allPostByHouseType: [],
    allPostByUserId: []
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
        builder.addCase(fetchPostByHouseType.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchPostByHouseType.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allPostByHouseType=action.payload
        })
        builder.addCase(fetchPostsByUserId.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(fetchPostsByUserId.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.allPostByUserId=action.payload
        })
        builder.addCase(fetchPostsByUserId.rejected , (state)=>{
            state.status='failed'
        })
    }

})
export default PostSlice.reducer