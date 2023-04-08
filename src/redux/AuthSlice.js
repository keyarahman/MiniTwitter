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
        },
        userfollowersList: [],
        userFollowingList: [],
        updateFollowAndFollowingList: true,
        updateTweetsList: true





    },
    reducers: {
        aduserInfo: (state, action) => {
            state.userInfo = action.payload

        },
        AddToken: (state, action) => {
            state.userTokenInfo = action.payload
        },
        UpdateFollowerInfo: (state, action) => {
            state.userfollowersList = action.payload

        },
        UpdateFollowingInfo: (state, action) => {
            state.userFollowingList = action.payload
        },
        updateFollowFollowingList: (state, action) => {
            state.updateFollowAndFollowingList = (!state.updateFollowAndFollowingList)
        },

        updateTweetsList: (state, action) => {
            state.updateTweetsList = (!state.updateTweetsList)
        },
    }
})

export const { aduserInfo, AddToken, UpdateFollowerInfo, UpdateFollowingInfo, updateFollowFollowingList, updateTweetsList } = userSlice.actions
export const userReducer = userSlice.reducer;