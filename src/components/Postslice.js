import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1234",
    }
]

const postslice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postRemove(state, action) {
            state.splice(action.payload.id, 1)
        },
        AllPostRemove(state, action) {
            state.length = 0
        }
    }
})

export const selectAllPosts = ((state) => state.posts)
export const { postAdded } = postslice.actions
export const { postRemove } = postslice.actions
export const { AllPostRemove } = postslice.actions
export default postslice.reducer