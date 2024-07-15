import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./AuthAction";


export interface User{
    id:Number,
    firstName:string,
    lastName:string,
    email:string,
    password:string
}

interface UserState{
    loginUser?:User
    status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState:UserState={
    loginUser: undefined,
    status: "idle"
}

export const AuthSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //register User
       builder.addCase(register.pending,(state)=>{
        state.status='loading'
       })
       builder.addCase(register.fulfilled,(state, action)=>{
        state.status='succeeded'
        state.loginUser=action.payload
       })
       builder.addCase(register.rejected,(state)=>{
        state.status='failed'
       })
       //User Login
       builder.addCase(login.pending, (state)=>{
        state.status='loading'
       })
       builder.addCase(login.fulfilled, (state, action)=>{
        state.status='succeeded',
        state.loginUser=action.payload
       })
       builder.addCase(login.rejected, (state)=>{
        state.status='failed'
       })
    }
})
export default AuthSlice.reducer