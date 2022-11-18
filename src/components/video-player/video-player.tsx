import {useEffect, useRef, useState} from 'react';
import {Spinner} from '../spinner/spinner';
import styles from './video-player.module.css';

type Props = {
  isPlaying: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export function VideoPlayer({isPlaying, videoLink, previewVideoLink}: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMute, setIsMute] = useState(true);
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
      videoRef.current.muted = isMute;
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying, isMute]);

  return (
    <div className={styles.wrapper}>
      {
        isLoading && <Spinner/>
      }

      <video
        src={videoLink}
        className="player__video"
        poster={previewVideoLink}
        ref={videoRef}
      >
      </video>

      <button
        className={styles.button}
        type="button"
        aria-label="sound control"
        onClick={() => setIsMute(!isMute)}
      >
        {
          isMute ? (
            <svg viewBox="0 0 24 24" width="27" height="27" fill="#EEE5B5"><g data-name="3. Silence" id="_3._Silence"><path d="M21,8v8a5,5,0,0,0,0-8Z"/><path d="M17.43,23.82A.988.988,0,0,0,18,24a1.039,1.039,0,0,0,.46-.11A1.02,1.02,0,0,0,19,23V9.24L9.78,18.46Z"/><path d="M23.707.293a1,1,0,0,0-1.414,0L19,3.586V1a.761.761,0,0,0-.03-.21A.987.987,0,0,0,17.43.18L9,6.08v7.506l-2,2V7H3A2.006,2.006,0,0,0,1,9v6a2.006,2.006,0,0,0,2,2H5.586L.293,22.293a1,1,0,1,0,1.414,1.414l22-22A1,1,0,0,0,23.707.293Z"/></g></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="27" height="27" fill="#EEE5B5"><g data-name="42. Sound" id="_42._Sound"><path d="M21,8v8a5,5,0,0,0,0-8Z"/><path d="M1,9v6a2.006,2.006,0,0,0,2,2H7V7H3A2.006,2.006,0,0,0,1,9Z"/><path d="M18.46.11a1,1,0,0,0-1.03.07L9,6.08V17.92l8.43,5.9A.988.988,0,0,0,18,24a1.039,1.039,0,0,0,.46-.11A1.02,1.02,0,0,0,19,23V1A1.02,1.02,0,0,0,18.46.11Z"/></g></svg>
          )
        }
      </button>
    </div>
  );
}
