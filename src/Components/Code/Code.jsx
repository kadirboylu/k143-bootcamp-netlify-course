import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const Code = ({ code }) => {
  return (
    <div>
      <code>
        <div>&gt; {code}</div>
        <div>
          <CopyToClipboard text={code}>
            <button>
              <FaCopy />
            </button>
          </CopyToClipboard>
        </div>
      </code>
    </div>
  );
};

export default Code;
