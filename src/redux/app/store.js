<<<<<<< HEAD
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

=======
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

>>>>>>> 2be13d818ceae66e63a8fa5a4e2f568c5a3cc2ef
export default store