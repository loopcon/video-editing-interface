import React from 'react';
import { Composition, Sequence } from 'remotion';
import VideoPlayer from './VideoPlayer';

export const RemotionRoot: React.FC = () => {
    return (
        <>
        {/* <Sequence> */}
            <Composition
                id="VideoPlayer"
                component={VideoPlayer}
                durationInFrames={250}
                fps={30}
                width={1280}
                height={720}
            />
        {/* </Sequence> */}
        </>
    );
};