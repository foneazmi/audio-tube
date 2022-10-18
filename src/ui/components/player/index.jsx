import { useState } from "react";
import YouTube from "react-youtube";
import { PlayIcon, StopIcon, PauseIcon } from "@heroicons/react/24/solid";
export const PlayerComponent = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [eventState, setEventState] = useState();
  const [videoId, setVideoId] = useState("jfKfPfyJRdk");
  return (
    <div className="flex px-8 flex-row justify-start">
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt=""
        className="mask mask-squircle h-24 w-24 "
      />
      <YouTube
        className="hidden"
        videoId={videoId}
        opts={{
          height: "512",
          width: "800",
          playerVars: {
            controls: 0,
            disablekb: 0,
            autoplay: 1,
          },
        }}
        onPlay={() => {
          setIsPlayed(true);
        }}
        onPause={() => {
          setIsPlayed(false);
        }}
        onEnd={() => {
          setIsPlayed(false);
        }}
        onReady={(event) => {
          setEventState(event.target);
        }}
      />
      <button
        onClick={() => {
          isPlayed ? eventState.pauseVideo() : eventState.playVideo();
        }}
      >
        {isPlayed ? (
          <PauseIcon className="h-6 w-6 ml-2 text-base-content" />
        ) : (
          <PlayIcon className="h-6 w-6 ml-2 text-base-content" />
        )}
      </button>
      <button
        onClick={() => {
          eventState.stopVideo();
          setIsPlayed(false);
        }}
      >
        <StopIcon className="h-6 w-6 ml-2 text-base-content" />
      </button>
    </div>
  );
};
