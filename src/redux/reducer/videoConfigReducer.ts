import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    width: 0,
    height: 0,
    length: 0,
    title_text: "",
    subtitle_text: ""
};

export const videoConfigReducer = createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_VIDEO_CONFIG', (state: any, action: any) => {
        return { ...state, ...action.payload }
    });
});