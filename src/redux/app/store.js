import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feature/AuthSlice';
import userReducer from '../feature/userSlice';
import ChatBotReducer from '../feature/ChatBotSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        chatbot: ChatBotReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: {
            ignoreState: true,
        }
    })
})

export default store