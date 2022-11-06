type Props = {
  videoLink: string;
  previewVideoLink: string;
}

export function VideoPlayer({videoLink, previewVideoLink}: Props): JSX.Element {
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
