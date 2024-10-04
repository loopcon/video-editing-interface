import { configureStore } from '@reduxjs/toolkit';
import { videoReducer } from './reducer/videoReducer';

const store = configureStore({
    reducer: {
        video: videoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;