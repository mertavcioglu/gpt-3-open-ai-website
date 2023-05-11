import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import GPT3 from "./components/GPT3";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <Header />
        <Companies />
        <GPT3 />
      </div>
    </div>
  );
}

export default App;
