import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoverPage() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButton(true), 62000);
  }, []);

  function handleRedirect() {
    navigate("/letter");
  }

  return (
    <>
      <iframe
        src="http://sanimesh96.github.io"
        width="100%"
        title="project-x-cover"
        id="project-x-cover"
      ></iframe>
      <div className="redirect-btn" hidden={!showButton}>
        <p onClick={handleRedirect}>
          Or Click Me to go Forward{" "}
        </p>
      </div>
    </>
  );
}
