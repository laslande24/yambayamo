import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const usersApi = 'https://random-data-api.com/api/v2/';

const initialState = {
    usersLoading: 'idle',
    usersError: false,
    usersErrorMessage: null,
    text: null,
    usersList: [],
}

const resetState = {
    usersLoading: 'idle',
    usersError: false,
    usersErrorMessage: null,
    text: null,
}

export const usersList = createAsyncThunk('users/usersList', async (size, thunkAPI) => {
    const headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    const response = await axios.get(usersApi + `users?size=${size}&is_xml=true`, headers);
    return response.data;
});

const UserSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        clearUsersState: (state) => {
            state.usersError = false;
            state.usersLoading = 'idle';
            state.usersErrorMessage = null;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(usersList.pending, (state) => {
            state.usersLoading = 'pending'
            state.usersError = false
        })
        builder.addCase(usersList.fulfilled, (state, { payload }) => {
            state.usersLoading = 'succeeded'
            state.usersList = payload
            return state;
        })
        builder.addCase(usersList.rejected, (state, { error }) => {
            state.usersLoading = 'failed'
            state.usersError = true
            state.usersErrorMessage = error.message
        })
    }
});

export const { clearUsersState } = UserSlice.actions;
export const usersSelector = (state) => state.users;
export default UserSlice.reducer;
