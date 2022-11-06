import {useEffect, useRef} from 'react';

type Props = {
  isPlaying: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export function VideoPlayer({isPlaying, videoLink, previewVideoLink}: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video
      src={videoLink}
      className="player__video"
      poster={previewVideoLink}
      muted
    >
    </video>
  );
}
