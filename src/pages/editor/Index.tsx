import { useSelector } from "react-redux";
import Configuration from "./Configuration";
import Sidebar from "./Sidebar";
import { VideoPlayer } from "./VideoPlayer";
import { Player } from "@remotion/player";
import Loader from "../component/Loader";
import { renderMedia } from "@remotion/renderer";

const Index: React.FC = () => {
    const { uploadedVideo, loading } = useSelector((state: any) => state.video);
    let { width, height, length } = useSelector((state: any) => state.videoConfigReducer);
    let { minVal, maxVal } = useSelector((state: any) => state.videotrimReducer);
    width = parseInt(width);
    height = parseInt(height);
    length = parseInt(length);
    minVal *= 3;
    maxVal *= 3;

    const templates = [
        { id: 1, image: 'out/VideoPlayer.mp4', text: 'Template 1' },
        { id: 2, image: 'out/VideoPlayer.mp4', text: 'Template 2' },
        { id: 3, image: 'out/VideoPlayer.mp4', text: 'Template 3' },
    ];

    return (
        <div className="app">
            <Sidebar templates={templates} />
            {/* <VideoPlayer videoSrc={uploadedVideo} /> */}
            <div className="player">
                {loading ? <Loader /> :
                    <Player
                        component={VideoPlayer}
                        durationInFrames={length === 0 ? 310 : length}
                        compositionWidth={width === 0 ? 500 : width}
                        compositionHeight={height === 0 ? 400 : height}
                        fps={30}
                        inputProps={{ uploadedVideo }}
                        controls
                        inFrame={minVal === 0 ? 1 : minVal}
                        outFrame={maxVal === 0 ? 10 : maxVal}
                        style={{
                            width: 530,
                            height: 350,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                }
            </div>

            <Configuration />
        </div>
    );
};

export default Index;