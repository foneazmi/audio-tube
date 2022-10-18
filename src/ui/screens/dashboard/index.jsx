import { useDispatch, useSelector } from "react-redux";
import { PlayerComponent, Navbar } from "../../components";
import { setSelectedMusic, getYoutube } from "../../../stores/actions";
export const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { youtube } = useSelector(({ global }) => global);
  return (
    <div className="h-full">
      <Navbar
        onSearch={(e) => {
          console.log("trigger");
          dispatch(getYoutube(e));
        }}
      />
      <div className="flex flex-wrap overflow-y-scroll pb-32 px-4">
        {youtube.map((e) => {
          return (
            <div className="w-full md:w-1/3 lg:w-1/5">
              <div className="card bg-base-100 shadow-xl mx-1 mt-4">
                <figure>
                  <img
                    src={e.thumbnail}
                    alt="Shoes"
                    className="object-contain"
                  />
                </figure>
                <div className="card-body flex flex-row">
                  <h2 className="card-title truncate flex-1">{e.title}</h2>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(setSelectedMusic(e.id));
                      }}
                    >
                      Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
