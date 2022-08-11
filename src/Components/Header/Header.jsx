import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <h1>
        <Link to="">NETLIFY COURSE</Link>
      </h1>
      <nav>
        <Link to="/manual-deploy">Manual Deploy</Link>
        <Link to="/deploy-from-github">Github</Link>
        <Link to="/netlify-cli">Netlify CLI</Link>
      </nav>
    </header>
  );
};

export default Header;
