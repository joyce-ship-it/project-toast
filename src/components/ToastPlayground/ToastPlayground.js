import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf.js";

import { ToastContext } from "../ToastProvider/ToastProvider.js";
import useEscapeKey from "../../hooks/UseEscapeKey.js";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    setToasts,
    handleCloseToast,
    handleOpenToast,
  } = React.useContext(ToastContext);
  // const [message, setMessage] = React.useState("");
  // const [variant, setVariant] = React.useState();

  // const [toasts, setToasts] = React.useState([]);
  // function handleCloseToast(index) {
  //   setToasts((prevVal) => {
  //     return prevVal.filter((toast) => {
  //       return toast.id !== index;
  //     });
  //   });
  // }
  // function handleOpenToast(e) {
  //   e.preventDefault();
  //   setToasts((prevVal) => {
  //     return [...prevVal, { id: crypto.randomUUID(), message, variant }];
  //   });
  //   setMessage("");
  // }
  function removeToasts() {
    setToasts([]);
  }
  useEscapeKey(removeToasts, []);

  return (
    <form className={styles.wrapper} onSubmit={handleOpenToast}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasts.length > 0 && (
        <ToastShelf
          handleCloseToast={handleCloseToast}
          toasts={toasts}
        ></ToastShelf>
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {/* TODO Other Variant radio buttons here */}
            {VARIANT_OPTIONS.map((variantType) => {
              return (
                <label htmlFor={`variant-${variantType}`} key={variantType}>
                  <input
                    id={`variant-${variantType}`}
                    type="radio"
                    name="variant"
                    value={variantType}
                    checked={variant === variantType}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {variantType}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
