import useLocalStorage from "use-local-storage";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import PropTypes from 'prop-types';
import Navigation from './assets/Routers';
import Alert from './assets/Components/Alerts';
import Appreance from './assets/Components/Appreance';

function App() {
  const Dark = window.matchMedia("(prefers-color-scheme: halloween)").matches;
  const [Theme, setTheme] = useLocalStorage(
    "theme",
    Dark ? "halloween" : "autumn"
  );

  const switchTheme = () => {
    const newThemes = Theme === "autumn" ? "halloween" : "autumn";
    setTheme(newThemes);
  };
  App.propTypes = {
    Theme: PropTypes,
};
  return (
    <div data-theme={Theme} className="h-full">
      <Navbar switchTheme={switchTheme} Theme={Theme} />
      <Alert />
      <Navigation />
      <Appreance />
      <Footer/>
    </div>
  );
}

export default App;
