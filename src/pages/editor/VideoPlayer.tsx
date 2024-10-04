import { AbsoluteFill, OffthreadVideo } from "remotion";
import './style.css';

type VideoProps = {
    uploadedVideo: string;
};

export const VideoPlayer: React.FC<VideoProps> = ({ uploadedVideo }) => {

    return (
        <div className="main-content">
            <div className="video-container">
                <AbsoluteFill>
                    <OffthreadVideo className="video" src={uploadedVideo} />
                </AbsoluteFill>
            </div>
        </div>
    );
};