import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
function SuccessAlertBanner({ style, titleSyle, title, msg }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "0",
        right: "0",

        zIndex: "9999",
        textAlign: "center",
      }}
      className={`${style} max-w-xl m-auto rounded-xl`}
    >
      <div
        style={{
          padding: "10px",
        }}
        className="flex items-center justify-center gap-2 text-theme-500 "
      >
        <strong className={`${titleSyle} text-2xl text-theme-bold`}>
          Success!
        </strong>
        <span className="h3"> Your operation was successful.</span>
        <button
          onClick={() => setVisible(false)}
          style={{
            marginLeft: "auto",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          className="h3 flex items-center gap-2 hover:text-theme-red text-theme-bold"
        >
          <span>Close</span>
          <span>
            <RxCross1 />
          </span>
        </button>
      </div>
    </div>
  );
}

export default SuccessAlertBanner;
