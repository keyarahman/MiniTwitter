import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            userName: "",
            email: "",
            password: null,
            userImage: null,

        },
        userTokenInfo: {
            token: null,
            isLoading: true
        }




    },
    reducers: {
        aduserInfo: (state, action) => {
            console.log("action", action)
            state.userInfo = action.payload

        },
        AddToken: (state, action) => {
            state.userTokenInfo = action.payload
        }
    }
})

export const { aduserInfo, AddToken } = userSlice.actions
export const userReducer = userSlice.reducer;