import useLocalStorage from "use-local-storage";
import { UilWindMoon, UilBrightness } from "@iconscout/react-unicons";

export default function Appreance() {
  const Dark = window.matchMedia("(prefers-color-scheme: halloween)").matches;
  const [Theme, setTheme] = useLocalStorage(
    "theme",
    Dark ? "halloween" : "autumn"
  );

  const switchTheme = () => {
    const newThemes = Theme === "autumn" ? "halloween" : "autumn";
    setTheme(newThemes);
  };
  return (
    <button onClick={switchTheme}>
      {Theme === "autumn" ? (
        <div className="z-30 top-[90%] bg-slate-900 outline outline-2 outline-offset-[-4px] text-white ml-2 p-1 right-1 fixed rounded-full flex">
          <i className="text-blue-600 border slide-right bg-white p-2 rounded-full">
            <UilWindMoon />
          </i>
          <p className="pt-2 mr-4 ml-2">Dark</p>
        </div>
      ) : (
        <div className="z-30 top-[90%] bg-white outline outline-2 outline-offset-[-4px] text-slate-900 ml-2 right-1 p-1 fixed rounded-full flex">
          <p className="pt-2 mr-1 ml-4">Light</p>
          <i className="text-yellow-400 slide-left bg-slate-900 p-2 rounded-full">
            <UilBrightness />
          </i>
        </div>
      )}
    </button>
  );
}
