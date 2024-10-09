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
                    <OffthreadVideo
                        src={uploadedVideo}
                        className="video"
                    />
                </AbsoluteFill>
            </div>
        </div>
    );
};