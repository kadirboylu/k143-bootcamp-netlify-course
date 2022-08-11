import React from "react";

// Components
import Code from "../../Components/Code/Code";

// Images
import manualDeploy1 from "./img/manual-deploy-1.png";
import manualDeploy2 from "./img/manual-deploy-2.png";

const ManualDeploy = () => {
  return (
    <div className="manual-deploy">
      <h2>
        1. Go to
        <a
          className="text-blue-500"
          href="https://app.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          app.netlify.com
        </a>
        and click "Add new site" button and click "Deploy Manually"
      </h2>
      <figure>
        <img src={manualDeploy1} alt="manual-deploy-1" />
        <figcaption>Fig.1 Add New Site</figcaption>
      </figure>
      <h2>2. Build your project for production</h2>
      <Code code="npm run build" />
      <h2>3. Drag the build file to the Netlify</h2>
      <figure>
        <img src={manualDeploy2} alt="manual-deploy-2" />
        <figcaption>Fig.2 Drag the build file</figcaption>
      </figure>
    </div>
  );
};

export default ManualDeploy;
