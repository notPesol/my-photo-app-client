import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Image.module.css";

const Image = ({ url, assetId }) => {
  const history = useHistory();
  console.log(history);

  const toDetailPage = () => {
    history.push(`/${assetId}`);
  };

  return (
    <figure className={styles.Image} onClick={toDetailPage}>
      <img src={url} alt="img" />
    </figure>
  );
};

export default Image;
