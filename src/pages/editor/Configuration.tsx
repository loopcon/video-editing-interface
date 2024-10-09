import { useState } from 'react';
import './style.css';
import { FiVideo } from "react-icons/fi";
import { uploadVideo } from '../../redux/actions/uploadedVideo';
import { useDispatch } from 'react-redux';
import { updateVideoConfig } from '../../redux/actions/videoConfigActions';
import MultiRangeSlider from '../component/MultiRangeSlider';

const Configuration: React.FC = () => {

    const [formFields, setFormFields] = useState<any>({
        width: 400,
        height: 500,
        length: 310,
        title_text: '',
        subtitle_text: '',
    });
    const dispatch = useDispatch();


    const uploadVideos = (files: any) => {
        const formData = new FormData();

        formData.append("file", files[0]);
        formData.append("upload_preset", "VideoPlayer");
        formData.append("cloud_name", "dzfyemjdk");

        uploadVideo(formData, dispatch);
    };

    const handleChangeInput = (e: any) => {
        if (e.target.name === 'length') {
            e.target.value = (parseInt(e.target.value) + 30 - 1)
        }
        if (e.target.name === 'width') {
            e.target.value = (parseInt(e.target.value) + 10 - 1)
        }
        if (e.target.name === 'height') {
            e.target.value = (parseInt(e.target.value) + 10 - 1)
        }
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
        updateVideoConfig(formFields, dispatch);
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
                <label htmlFor="file-input" className="videoUploadCard">
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
                <label htmlFor="range" style={{ paddingBottom: '5px', fontWeight: 'bold' }}>Range to trim video</label>
                <MultiRangeSlider min={0} max={100} />
            </div>
        </div>
    );
};

export default Configuration;