import { useSelector } from "react-redux";
import Configuration from "./Configuration";
import Sidebar from "./Sidebar";
import { VideoPlayer } from "./VideoPlayer";
import { Player } from "@remotion/player";

const Index: React.FC = () => {
    const { uploadedVideo } = useSelector((state: any) => state.video);
    console.log("uploadedVideo >>", uploadedVideo)

    const templates = [
        { id: 1, image: 'out/VideoPlayer.mp4', text: 'Template 1' },
        { id: 2, image: 'out/VideoPlayer.mp4', text: 'Template 2' },
        { id: 3, image: 'out/VideoPlayer.mp4', text: 'Template 3' },
    ];

    // const videoSrc = 'https://example.com/video.mp4';
    // const width = 1066;
    // const height = 600;
    // const length = 10;
    // const titleText = 'My new Website';
    // const subtitleText = 'Releasing today!';

    return (
        <div className="app">
            <Sidebar templates={templates} />
            {/* <VideoPlayer videoSrc={uploadedVideo} /> */}
            <div className="player">
                <Player
                    component={VideoPlayer}
                    durationInFrames={250}
                    compositionWidth={500}
                    compositionHeight={400}
                    fps={30}
                    inputProps={{ uploadedVideo }}
                    controls
                    style={{
                        width: 530,
                        height: 350,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
            </div>

            <Configuration />
        </div>
    );
};

export default Index;