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
        <a href="https://github.com/sailorbunni/dictionary-react">
          Open-source code
        </a>{" "}
        by Donna Dinh. Hosted on{" "}
        <a href="https://serene-mcnulty-70db74.netlify.app/"> Netlify</a>{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
