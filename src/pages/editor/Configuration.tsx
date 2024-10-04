import { useState } from 'react';
import './style.css';
import { FiVideo } from "react-icons/fi";
// import { FiMusic } from "react-icons/fi";
import { uploadVideo } from '../../redux/actions/uploadedVideo';
import { useDispatch } from 'react-redux';

type VideoState =
    | {
        type: "empty";
    }
    | {
        type: "blob" | "cloud";
        url: string;
    };

const Configuration: React.FC = () => {

    const [videoState, setVideoState] = useState<VideoState>({
        type: "empty",
    });

    const [formFields, setFormFields] = useState<any>({
        width: 0,
        height: 0,
        length: 0,
        title_text: "",
        subtitle_text: ""
    });
    const dispatch = useDispatch();

    const uploadVideos = (files: any) => {
        const formData = new FormData();

        formData.append("file", files[0]);
        formData.append("upload_preset", "VideoPlayer");
        formData.append("cloud_name", "dzfyemjdk");

        // uploadVideo(formData, dispatch);
        fetch(import.meta.env.VITE_REACT_APP_CLOUDINARY_API_URL, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setVideoState(data.secure_url);
                uploadVideo(data.secure_url, dispatch);
                localStorage.setItem('videoUrl', data.secure_url);
            });
    };

    const handleChangeInput = (e: any) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }

    return (
        <div className="configuration">
            <div className="render-button">
                Render
                <i className="fas fa-play" />
            </div>
            <hr />
            <h1>Configuration</h1>
            <div className='select-file'>
                <label htmlFor="file-input" className="card">
                    <FiVideo style={{ fontSize: "40px" }} />
                    <input
                        type="file"
                        id='file-input'
                        hidden
                        onChange={(e) => uploadVideos(e.target.files)}
                    />
                    <p className="title">Add Video</p>
                    <p className="subtitle">Click/drag</p>
                </label>
                {/* <div className="card">
                    <FiMusic style={{ fontSize: "40px" }} />
                    <p className="title">Add Audio</p>
                    <p className="subtitle">Click/drag</p>
                </div> */}
            </div>
            <div style={{ paddingTop: '30px' }}>
                <div style={{ display: "flex" }}>
                    <div className="input-group">
                        <label htmlFor="width">Width</label>
                        <input
                            id="width"
                            name='width'
                            type="number"
                            value={formFields.width}
                            placeholder='1066'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="height">Height</label>
                        <input
                            id="height"
                            name='height'
                            type="number"
                            value={formFields.height}
                            onChange={handleChangeInput}
                            placeholder='600'
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="length">Length (s)</label>
                        <input
                            id="length"
                            name='length'
                            type="number"
                            value={formFields.length}
                            onChange={handleChangeInput}
                            placeholder='10'
                        />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="title-text">Title Text</label>
                    <input
                        id="title-text"
                        name='title_text'
                        type="text"
                        value={formFields.title_text}
                        onChange={handleChangeInput}
                        placeholder='Enter Title Text'
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="subtitle-text">Subtitle Text</label>
                    <input
                        id="subtitle-text"
                        name='subtitle_text'
                        type="text"
                        value={formFields.subtitle_text}
                        onChange={handleChangeInput}
                        placeholder='Enter Subtitle Text'
                    />
                </div>
            </div>

        </div>
    );
};

export default Configuration;