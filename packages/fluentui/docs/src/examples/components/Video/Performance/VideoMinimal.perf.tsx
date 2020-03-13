import { Video } from '@fluentui/react-experimental';
import * as React from 'react';

const VideoMinimalPerf = () => <Video />;

VideoMinimalPerf.iterations = 5000;
VideoMinimalPerf.filename = 'VideoMinimal.perf.tsx';

export default VideoMinimalPerf;
