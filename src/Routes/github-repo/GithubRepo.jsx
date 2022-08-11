import React from "react";

// Images
import githubRepo1 from "./img/github-repo-1.png";
import githubRepo2 from "./img/github-repo-2.png";
import githubRepo3 from "./img/github-repo-3.png";
import githubRepo4 from "./img/github-repo-4.png";

const GithubRepo = () => {
  return (
    <div className="github-repo">
      <h2>
        1. Go to{" "}
        <a
          className="text-blue-500"
          href="https://app.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          app.netlify.com
        </a>
        and click "Add new site" button and click "Import an Existing Project"
      </h2>
      <figure>
        <img src={githubRepo1} alt="github-repo-1" />
        <figcaption>Fig.1</figcaption>
      </figure>
      <h2>2. Choose Repository</h2>
      <figure>
        <img src={githubRepo2} alt="github-repo-2" />
        <figcaption>Fig.2</figcaption>
      </figure>
      <figure>
        <img src={githubRepo3} alt="github-repo-3" />
        <figcaption>Fig.3</figcaption>
      </figure>
      <figure>
        <img src={githubRepo4} alt="github-repo-3" />
        <figcaption>Fig.4</figcaption>
      </figure>
    </div>
  );
};

export default GithubRepo;
