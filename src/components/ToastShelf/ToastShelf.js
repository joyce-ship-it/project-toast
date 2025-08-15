import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleCloseToast, toasts }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      <li className={styles.toastWrapper}>
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              index={toast.id}
              variant={toast.variant}
              handleCloseToast={handleCloseToast}
            >
              {toast.message}
            </Toast>
          );
        })}
      </li>
    </ol>
  );
}

export default ToastShelf;
