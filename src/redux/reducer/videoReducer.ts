import { createReducer } from "@reduxjs/toolkit";

const videoUrl = localStorage.getItem("videoUrl");
const initialState = {
    uploadedVideo: videoUrl ? videoUrl : '',
};

export const videoReducer = createReducer(initialState, (builder) => {
    builder.addCase('UPLOAD_VIDEO', (state: any, action: any) => {
        return { ...state, uploadedVideo: action.payload }
    });

    // builder.addCase("UPLOAD_REQUEST", (state) => {
    //     return { ...state, loading: true };
    // });

    // builder.addCase("UPLOAD_SUCCESS", (state: any, action: any) => {
    //     console.log("action >>",action)
    //     return { ...state, loading: false, uploadedVideo: action.payload }
    // });

    // builder.addCase("UPLOAD_FAIL", (state: any, action: any) => {
    //     return { ...state, loading: false, error: action.payload, uploadedVideo: null }
    // });
});