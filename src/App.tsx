import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-warning">Primary button</button>
      </div>
    </>
  );
}

export default App;
