import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../components/Postslice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
    }
})