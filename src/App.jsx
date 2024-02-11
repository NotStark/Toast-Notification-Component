import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // * Could use object
  function showToast(type) {
    let toReturn;
    if (type === "success") {
      toReturn = toast.success("Success Toast Notification", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (type === "info") {
      toReturn = toast.info("Info Toast Notification", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (type === "warning") {
      toReturn = toast.warn("Warning Toast Notification", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toReturn = toast.error("Error Toast Notification", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    return toReturn
  }
  return (
    <>
      <div className="container">
        <button onClick={() => showToast("success")}>Success</button>
        <button onClick={() => showToast("info")}>Info</button>
        <button onClick={() => showToast("warning")}>Warning</button>
        <button onClick={() => showToast("error")}>Error</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
