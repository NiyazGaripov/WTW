import {useEffect, useRef, useState} from 'react';

type Props = {
  isPlaying: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export function VideoPlayer({isPlaying, videoLink, previewVideoLink}: Props): JSX.Element {
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
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
