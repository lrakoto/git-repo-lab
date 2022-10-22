import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="row justify-content-center">
        <div
          className="card p-2 m-2 justify-content-center align-middle"
          style={{ width: "40rem" }}
        >
          <img
            src="http://placekitten.com/200/300"
            className="card-img-top"
            alt="cat"
          />
          <div className="card-body">
            <h5 className="card-title">Helena's Edit</h5>
            <p className="card-text">Things and such etc!</p>
          </div>

          <div className="card-body">
            <a href="https://www.google.com" className="card-link">
              Site
            </a>
            <a href="http://github.com" className="card-link">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
