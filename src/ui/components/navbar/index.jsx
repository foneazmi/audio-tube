import {
  Bars4Icon,
  SparklesIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../stores/actions";
import { THEME } from "../../../helpers";
import { useState } from "react";

export const ThemeItem = ({ theme }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
      data-set-theme={theme}
      data-act-class="outline"
      onClick={() => dispatch(setTheme(theme))}
    >
      <div
        data-theme={theme}
        className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
      >
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
            <div className="flex-grow text-sm font-bold">{theme}</div>
            <div className="flex flex-shrink-0 flex-wrap gap-1">
              <div className="bg-primary w-2 rounded"></div>
              <div className="bg-secondary w-2 rounded"></div>
              <div className="bg-accent w-2 rounded"></div>
              <div className="bg-neutral w-2 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navbar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
      <nav className="navbar w-full">
        <div className="flex-1">
          <div className="font-black text-primary inline-flex text-lg ml-4">
            <span className="text-primary">Audio</span>
            <span className="text-base-content">Tube</span>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search...."
            className="input input-bordered w-full max-w-xs"
            value={query}
            onBlur={() => {
              if (query.length > 0) {
                props.onSearch(query);
                setQuery("");
              }
            }}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && query.length > 0) {
                props.onSearch(query);
                setQuery("");
              }
            }}
          />
        </div>
        <div className="flex-0">
          <div title="Change Theme" className="dropdown dropdown-end ">
            <div tabIndex="0" className="btn gap-1 normal-case btn-ghost">
              <SparklesIcon className="inline-block h-5 w-5 text-base-content stroke-current md:h-6 md:w-6" />
              <span className="hidden md:inline text-base-content">Theme</span>
              <ChevronDownIcon className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" />
            </div>
            <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
              <div className="grid grid-cols-1 gap-3 p-3" tabIndex="0">
                {THEME.map((element, index) => (
                  <ThemeItem theme={element} key={`${index}-theme`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
