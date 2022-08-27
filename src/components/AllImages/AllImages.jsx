import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import Wrapper from "../Wrapper/Wrapper";

import styles from "./AllImages.module.css";

import { fetchImages } from "../../api/image";
import Loading from "../Loading/Loading";
import { errorStyle } from "../../styles";

const AllImages = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchImages("/images", null, { "Content-Type": "application/json" })
      .then((data) => {
        setImagesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setImagesData([]);
        setError("เกิดข้อผิดหลาด โปรดลองเข้าใหม่ดูนะ");
        setLoading(false);
      });
  }, []);

  const imagesContent = imagesData.map((imageData) => (
    <Image
      key={imageData.assetId}
      url={imageData.url}
      assetId={imageData.assetId}
    />
  ));

  const errorContent = <h3 style={errorStyle}>{error}</h3>;

  return (
    <Wrapper headText="All Images">
      <section className={styles.AllImages}>
        {loading && <Loading />}
        {error && errorContent}
        {!loading && !error && imagesContent}
      </section>
    </Wrapper>
  );
};

export default AllImages;
