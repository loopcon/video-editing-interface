import React from 'react';
import { AbsoluteFill, OffthreadVideo, staticFile } from 'remotion';

interface VideoPlayerProps {
    src?: any;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    console.log("src ...", props);

    return (
        <AbsoluteFill>
            <OffthreadVideo src={staticFile("_Composition_ _ Remotion _ Make videos programmatically.webm")} />
        </AbsoluteFill>
    );
};

export default VideoPlayer;