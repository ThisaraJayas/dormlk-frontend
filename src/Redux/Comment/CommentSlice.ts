import { createSlice } from "@reduxjs/toolkit"
import { createComment } from "./CommentAction"

export interface Comment{
    id:number,
    content:string,
}

interface CommentState{
    comment:Comment,
    allComment:Comment[]
    status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState:CommentState={
    comment: undefined,
    allComment: [],
    status: "idle"
}
export const CommentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createComment.pending,(state)=>{
            state.status='loading'
        })
        builder.addCase(createComment.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.comment=action.payload
        })
    }

})
export default CommentSlice.reducer