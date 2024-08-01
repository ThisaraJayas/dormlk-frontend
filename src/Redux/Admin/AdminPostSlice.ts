import { createSlice } from "@reduxjs/toolkit";
import { getAllPostsAdmin } from "./AdminPostAction";

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
    adminPost:Post,
    allAdminPost:Post[]
    status: "idle" | "loading" | "succeeded" | "failed"
}
const initialState:PostState={
    adminPost: undefined,
    allAdminPost: [],
    status: "idle",
}

export const AdminPostSlice = createSlice({
    name:"adminPost",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPostsAdmin.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(getAllPostsAdmin.fulfilled,(state, action)=>{
            state.status='succeeded',
            state.allAdminPost=action.payload
        })
        builder.addCase(getAllPostsAdmin.rejected,(state)=>{
            state.status='failed'
        })
    }
})
export default AdminPostSlice.reducer