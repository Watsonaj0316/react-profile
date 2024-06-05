import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "../loading_spinner/Spinner";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <Spinner /> {/* Include Spinner component here */}
      </div>
    );
  }
}

// Wrap the App component with the Router component
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
