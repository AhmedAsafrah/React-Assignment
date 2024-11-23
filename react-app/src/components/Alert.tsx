import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-info alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
