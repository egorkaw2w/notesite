import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./components/Notes";
import NotePage from "./components/NotePage";
import MainPage from "./mainPage.js"

class App extends React.Component {

  render() {
    console.log(MainPage)
    return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notePage/:id" element={<NotePage />} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;