import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiUrl = 'https://sandbox.peexit.com/api/v1/users/login';

const userApi = 'https://randomuser.me/api/';

const initialState = {
    loading: 'idle',
    error: false,
    errorMessage: null,
    text: null,
    userData: [],
}

const resetState = {
    loading: 'idle',
    error: false,
    errorMessage: null,
    text: null,
}

export const userLogin = createAsyncThunk('auth/userLogin', async (data, thunkAPI) => {
    const datas = {
        email: data.email,
        password: data.password
    }
    const headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    const response = await axios.post(apiUrl, datas, headers);
    return response.data;
});

export const userData = createAsyncThunk('auth/userData', async (thunkAPI) => {
    const headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    const response = await axios.get(userApi, headers);
    return response.data;
});

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        clearState: (state) => {
            state.error = false;
            state.loading = 'idle';
            state.errorMessage = null;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = 'pending'
            state.error = false
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded'
        })
        builder.addCase(userLogin.rejected, (state, { error }) => {
            state.loading = 'failed'
            state.error = true
            state.errorMessage = error.message
        })
        builder.addCase(userData.pending, (state) => {
            state.loading = 'pending'
            state.error = false
        })
        builder.addCase(userData.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded'
            state.userData = payload.results[0]
            return state;
        })
        builder.addCase(userData.rejected, (state, { error }) => {
            state.loading = 'failed'
            state.error = true
            state.errorMessage = error.message
        })
    }
});

export const { clearState } = AuthSlice.actions;
export const authSelector = (state) => state.auth;
export default AuthSlice.reducer;