import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h2>What is Netlify?</h2>
      <p>
        Netlify is a San Francisco-based cloud computing company that offers
        hosting and serverless backend services for web applications and static
        websites.
      </p>
      <h2>Deploy Methods</h2>
      <ul>
        <li>Manual Deploy</li>
        <li>Deploy existing project via GitHub</li>
        <li>Deploy via Netlify-CLI</li>
      </ul>

      <a
        className="hover:bg-gray-700"
        href="https://app.netlify.com/start/deploy?repository=https://github.com/kadirboylu/k143-bootcamp-netlify-course"
      >
        <img
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="netlify"
        />
      </a>
    </div>
  );
};

export default Home;
