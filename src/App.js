import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div
      className="app"
      style={{ backgroundImage: "url(assets/background.png)" }}
    >
      <img src={"assets/logo.png"} id="logo-image" />
      <Card></Card>
    </div>
  );
}

export default App;
