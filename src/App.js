import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Movies } from "./Components/Movies/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
