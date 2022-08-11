import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";

// Routes
import GithubRepo from "./Routes/github-repo/GithubRepo";
import Home from "./Routes/home/Home";
import ManualDeploy from "./Routes/manual-deploy/ManualDeploy";
import NetlifyCLI from "./Routes/netlify-cli/NetlifyCLI";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/manual-deploy" element={<ManualDeploy />} />
          <Route path="/deploy-from-github" element={<GithubRepo />} />
          <Route path="/netlify-cli" element={<NetlifyCLI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
