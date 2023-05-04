import { Link } from "react-router-dom";
import Logo from "../images/PPRQ-logo.png";
import LogoWhite from "../images/PPRQ-logo-white.png";
import useLocalStorage from "use-local-storage";

const Navbar = () => {
  const Dark = window.matchMedia("(prefers-color-scheme: halloween)").matches;
  const [Theme] = useLocalStorage("theme", Dark ? "halloween" : "autumn");

  return (
    <div className="sticky top-0 left-0 right-0 z-20 navbar bg-base-100 drop-shadow-md mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Materi</Link>
            </li>
            <li>
              <Link>Artikel</Link>
            </li>
            <li>
              <Link>Tentang Web</Link>
            </li>
          </ul>
        </div>

        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          {" "}
          {Theme === "autumn" ? (
            <img src='https://github.com/Iqbalnglames/rqits-vite/blob/develop/src/assets/Images/PPRQ-logo.png?raw=true' width="100px" alt="logo" className="mr-2" />
          ) : (
            <img src='https://github.com/Iqbalnglames/rqits-vite/blob/develop/src/assets/Images/PPRQ-logo-white.png?raw=true' width="100px" className="mr-2" alt="logo" />
          )}
          RQITS
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"materi"}>Materi</Link>
          </li>
          <li>
            <Link to={"artikel"}>Artikel</Link>
          </li>
          <li>
            <Link to={"about"}>Tentang Web</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
