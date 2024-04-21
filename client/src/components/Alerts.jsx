import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";



function SuccessAlert({ msg = "Success ...." }) {
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
      style={{ zIndex: 1000 }}
      role="alert"
      className="fixed top-5 inset-0 flex min-h-min justify-center z-50"
      data-dismissible="alert"
    >
      <div className="flex items-center text-theme-extrabold justify-between min-w-56 px-4 py-2 text-base text-white bg-green-600 rounded-md font-regular relative">
        <div className="mr-12 text-theme-bold">{msg}</div>
        <button className="flex items-center" onClick={() => setVisible(false)}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

function LoadingAlert({ msg = "Loading... ! Please Wait..." }) {
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
      style={{ zIndex: 1000 }}
      role="alert"
      className="fixed top-5 inset-0 flex min-h-min justify-center z-50"
      data-dismissible="alert"
    >
      <div className="flex items-center justify-between min-w-56 px-4 py-2 text-base text-gray-800 bg-white rounded-md font-regular relative">
        <div className="mr-12 text-theme-extrabold">{msg}</div>
        <button className="flex items-center" onClick={() => setVisible(false)}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}


function ErrorAlert({ msg = "Error!  Try Again..." }) {
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
      style={{ zIndex: 1000 }}
      role="alert"
      className="fixed top-5 inset-0 flex min-h-min justify-center z-50"
      data-dismissible="alert"
    >
      <div className="flex items-center justify-between min-w-96 px-4 py-2 text-base text-white bg-red-500 rounded-md font-regular relative">
        <div className="mr-12 text-theme-extrabold">{msg}</div>
        <button className="flex items-center" onClick={() => setVisible(false)}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}
export { SuccessAlert, LoadingAlert, ErrorAlert };
