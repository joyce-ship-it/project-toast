import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ index, handleCloseToast, variant, children }) {
  const IconType = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconType size={24} />
      </div>
      <p className={styles.content}>
        {children}
        <VisuallyHidden>{children}</VisuallyHidden>
      </p>

      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={(id) => handleCloseToast(index)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
