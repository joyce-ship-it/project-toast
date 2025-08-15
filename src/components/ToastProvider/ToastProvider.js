import React from "react";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState();
  const [toasts, setToasts] = React.useState([]);
  function handleCloseToast(index) {
    setToasts((prevVal) => {
      return prevVal.filter((toast) => {
        return toast.id !== index;
      });
    });
  }
  function handleOpenToast(e) {
    e.preventDefault();
    setToasts((prevVal) => {
      return [...prevVal, { id: crypto.randomUUID(), message, variant }];
    });
    setMessage("");
  }

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        setToasts,
        handleCloseToast,
        handleOpenToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
