import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { PlayIcon, StopIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
export const PlayerComponent = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [eventState, setEventState] = useState();
  // const [videoId, setVideoId] = useState("jfKfPfyJRdk");
  const { selectedMusic } = useSelector(({ global }) => global);
  useEffect(() => {
    setIsPlayed(false);
  }, [selectedMusic]);

  return (
    <div className="btm-nav z-50">
      <div className="flex px-8 flex-row justify-start">
        <img
          src={`https://img.youtube.com/vi/${selectedMusic}/0.jpg`}
          alt=""
          className={`h-20 w-20 mb-8 ${
            isPlayed && "motion-safe:animate-spin-slow"
          } hover:animate-none object-fill rounded-full`}
        />
        <YouTube
          className="hidden"
          videoId={selectedMusic}
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
    </div>
  );
};
