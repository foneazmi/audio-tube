import { useDispatch, useSelector } from "react-redux";
import { PlayerComponent, Navbar } from "../../components";
import { setSelectedMusic, getYoutube } from "../../../stores/actions";
import { useEffect } from "react";
export const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { youtube } = useSelector(({ global }) => global);
  useEffect(() => {
    dispatch(getYoutube("lofi"));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        onSearch={(e) => {
          dispatch(getYoutube(e));
        }}
      />
      <div className="flex flex-wrap overflow-y-scroll pb-32 px-4">
        {youtube.map((yt) => (
          <MusicItem {...yt} />
        ))}
      </div>
    </div>
  );
};

const MusicItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full md:w-1/3 lg:w-1/5 p-2"
      onClick={() => {
        dispatch(setSelectedMusic(props.id));
      }}
    >
      <div className="card w-full bg-base-100 shadow-xl image-full h-40">
        <img src={props.thumbnail} className="object-none" alt="" />
        <div className="card-body">
          <h2 className="card-title">{props.title.slice(0, 50)}</h2>
        </div>
      </div>
    </div>
  );
};
