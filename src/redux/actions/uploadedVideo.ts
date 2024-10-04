export const uploadVideo = async (video: string, dispatch: (action: any) => void) => {
    try {
        if (!video) {
            throw new Error('please provide video url');
        }
        dispatch({ type: 'UPLOAD_VIDEO', payload: video });
        return video;
    } catch (error: any) {
        return error
    }
};

// export const uploadVideo = async (formData: any, dispatch: (action: any) => void) => {
//     try {
//         console.log("formData >>", formData);

//         dispatch({ type: "UPLOAD_REQUEST", loading: true });

//         // const response = await fetch(import.meta.env.VITE_REACT_APP_CLOUDINARY_API_URL, {
//         //     method: "POST",
//         //     body: formData,
//         // })

//         // let response: any = '';
//         const data = await fetch(import.meta.env.VITE_REACT_APP_CLOUDINARY_API_URL, {
//             method: "POST",
//             body: formData,
//         });
//         console.log('data >>', data)

//         //     .then((response) => response.json())
//         //     .then((data) => {
//         //         console.log("data >>", data);
//         //         response = data;
//         //     });
//         // console.log("response >>>", response);

//         // dispatch({ type: "UPLOAD_SUCCESS", payload: response, loading: false });

//         // return response;
//     } catch (error: any) {
//         dispatch({ type: "UPLOAD_FAIL", payload: error });
//     }
// };
