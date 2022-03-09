import Header from "./components/Header";
import './App.css';
import Content from "./components/Content";
import Footer from "./components/Footer";
import Chatbox from "./components/Chatbox";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
