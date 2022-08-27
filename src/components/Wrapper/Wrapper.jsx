import React from "react";

import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className, headText }) => {
  const classes = `${styles.Wrapper} ${className}`;
  return (
    <div className={classes}>
      {headText && <h2>{headText}</h2>}
      {children}
    </div>
  );
};

export default Wrapper;
