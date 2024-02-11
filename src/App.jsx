import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showToast = (type) => {
    const options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    };

    switch (type) {
      case "success":
        toast.success("Success Toast Notification", options);
        break;
      case "info":
        toast.info("Info Toast Notification", options);
        break;
      case "warning":
        toast.warn("Warning Toast Notification", options);
        break;
      case "error":
        toast.error("Error Toast Notification", options);
        break;
      default:
        toast("Unknown Toast Notification", options);
    }
  };

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
