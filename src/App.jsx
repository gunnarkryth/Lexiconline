import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.scss";
import "./assets/styles/Fonts.scss";

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { API } from "./Pages/API";
import { MissingPage } from "./Pages/MissingPage";

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/api" element={<API />}></Route>
          <Route path="*" element={<MissingPage />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
