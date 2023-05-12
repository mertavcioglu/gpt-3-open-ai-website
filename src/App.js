import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import GPT3 from "./components/GPT3";
import Feature01 from "./components/Feature01";
import Feature02 from "./components/Feature02";
import GetStarted from "./components/GetStarted";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <Header />
        <Companies />
        <GPT3 />
        <Feature01 />
        <Feature02 />
        <GetStarted />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
