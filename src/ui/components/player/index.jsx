import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { PlayIcon, StopIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMusic } from "../../../stores/actions";
export const PlayerComponent = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [eventState, setEventState] = useState();
  const [query, setQuery] = useState();
  const { selectedMusic } = useSelector(({ global }) => global);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsPlayed(false);
  }, [selectedMusic]);

  return (
    <div className="btm-nav z-50 bg-base-300">
      <div className="flex px-8 flex-row justify-start">
        <img
          src={`https://img.youtube.com/vi/${selectedMusic}/0.jpg`}
          alt=""
          className={`h-20 w-20 mb-8 ${
            isPlayed && "motion-safe:animate-spin-slow"
          } hover:animate-none object-fill rounded-full`}
        />
        <YouTube
          // className="hidden"
          videoId={selectedMusic}
          opts={{
            height: "0",
            width: "0",
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
        <div className="flex-1" />
        <div>
          <input
            type="text"
            placeholder="Input Id"
            className="input input-bordered w-full max-w-xs"
            onBlur={() => {
              if (query.length > 0) {
                dispatch(setSelectedMusic(query));
                setQuery("");
              }
            }}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && query.length > 0) {
                dispatch(setSelectedMusic(query));
                setQuery("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
