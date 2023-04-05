import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './AuthSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})