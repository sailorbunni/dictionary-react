import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        <a href="https://github.com/sailorbunni/weather-react">
          Open-source code
        </a>{" "}
        by Donna Dinh. Hosted on{" "}
        <a href="https://wonderful-panini-1db93a.netlify.app/"> Netlify</a>{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
