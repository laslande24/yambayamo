import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const apiKey = "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";

const apiUrl = 'https://api.openai.com/v1/completions';

const initialState = {
    loading: 'idle',
    error: false,
    errorMessage: null,
    chatMessage: [],
}

const resetState = {
    loading: 'idle',
    error: false,
    errorMessage: null,
    text: null,
}

export const sendMessage = createAsyncThunk('chatbot/sendMessage', async (message, thunkAPI) => {

    const response = await axios.post(apiUrl, {
        prompt: message,
        max_tokens: 100,
        model: "text-davinci-003",
        top_p: 1,
        temperature: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0.5,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    });

    const chatbotResponse = response.data.choices[0].text;

    const chatbotMessage = {
        _id: Math.random().toString(36).substring(7),
        text: chatbotResponse,
        createdAt: new Date(),
        user: {
            _id: 'chatbot',
            name: 'Chatbot',
        },
    };

    return chatbotMessage;
});

const ChatBotSlice = createSlice({
    name: "chatbot",
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
        builder.addCase(sendMessage.pending, (state) => {
            state.loading = 'pending'
            state.error = false
        })
        builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded'
            state.chatMessage = payload
        })
        builder.addCase(sendMessage.rejected, (state, { error }) => {
            state.error = true
            if (error.response) {
                if (error.response.data.error.statusCode === 401) {
                    state.errorMessage = error.response.data.error.message
                } else if (error.response.data.error.statusCode === 500) {
                    state.errorMessage = error.response.data.error.message
                }
            } else if (error.request) {
                state.errorMessage = error.request
            } else if (error.code == "ERR_BAD_REQUEST") {
                state.errorMessage = "Invalid user name or password"
            } else if (error.code == "ERR_NETWORK") {
                state.errorMessage = "Your network is unstable. Please fix and try again"
            } else {
                state.errorMessage = error.message
            }
        })
    }
});

export const { clearState } = ChatBotSlice.actions;
export const chatBotSelector = (state) => state.chatbot;
export default ChatBotSlice.reducer;