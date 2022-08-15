import React from "react";

import Code from "../../Components/Code/Code";

const NetlifyCLI = () => {
  return (
    <div className="netlify-cli">
      {/* Install netflify-cli */}
      <h2>1. Install netflify-cli</h2>
      <Code code="npm install netlify-cli -g" />
      {/* Check the installation */}
      <h2>2. Check the installation</h2>
      <Code code="netlify" />
      <p>
        If you see the version, usage and commands in the terminal, the
        installation has been completed successfully.
      </p>
      {/* Login to your netlify account */}
      <h2>3. Login to your netlify account</h2>
      <Code code="netlify login" />
      <p>
        When you run this command, it will direct you to the relevant link and
        ask you to login to your netlify account and confirm the authorization.
      </p>
      {/* netlify status */}
      <Code code="netlify status" />
      <p>
        If you are successfully logged in, you can see your account information
        when you run this command.
      </p>
      {/* Config.json */}
      <h2>config.json</h2>
      <p>
        You can access your config.json file from the following locations
        depending on your operating system.
      </p>
      <ul>
        <li>
          macOS: <p>Library/Preferences/netlify/config.json</p>
        </li>
        <li>
          Linux: <p>.config/netlify/config.json</p>
        </li>
        <li>
          Windows: <p>AppData\Roaming\netlify\Config\config.json</p>
        </li>
      </ul>
      {/* Netlify init */}
      <h2>4. Initialize Netlify</h2>
      <Code code="netlify init" />
      <p>You can initialize Netlify manually or by connecting it to github.</p>
      {/* Run dev server */}
      <h2>5. Run dev server (http://localhost:8888)</h2>
      <Code code="netlify dev" />
      <p>If you want to change the port, create a netlify.toml file.</p>
      {/* Live dev server */}
      <h2>6. Live dev server</h2>
      <Code code="netlify dev --live" />
      {/* Deploy */}
      <h2>7. Deploy</h2>
      <h3>Build for production</h3>
      <Code code="npm run build" />
      <h3>7.1. Deploy your site</h3>
      <Code code="netlify deploy" />
      <h3>7.2. Deploy for production</h3>
      <Code code="netlify deploy --prod" />
    </div>
  );
};

export default NetlifyCLI;
