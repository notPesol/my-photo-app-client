import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

import styles from "./SingleImage.module.css";

import { fetchImages } from "../../api/image";
import Loading from "../Loading/Loading";
import { errorStyle } from "../../styles";

const SingleImage = ({ match }) => {
  const { id } = match.params;
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setLoading(true);
    fetchImages(`/images/${id}`)
      .then((data) => {
        setLoading(false);
        setImageData(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("ไม่พบรูปภาพ");
      });
  }, [id]);

  const errorContent = <h3 style={errorStyle}>{error}</h3>;

  return (
    <Wrapper>
      {loading && <Loading />}
      {imageData && (
        <img
          className={styles.SingleImage}
          src={imageData.url}
          alt={imageData.assetId}
        />
      )}
      {error && errorContent}
    </Wrapper>
  );
};

export default SingleImage;
