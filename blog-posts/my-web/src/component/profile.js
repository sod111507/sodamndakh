"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";
const Profile = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div className={styles.doe}>
      <div className={styles.profile}>
        <div className={styles.brrrr}>
          <img className={styles.avatar} src="Image.png" />
          <div className={styles.profile2nd}>
            <h3>Jonathan Doe</h3>
            <h6>Collaborator & Editor</h6>
          </div>
        </div>
        <p className={styles.fact}>
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          <br />
          technology and travel. Jonathan holds a degree in Computer Science and
          <br /> has spent years working in the tech industry, gaining a deep
          understanding
          <br /> of the impact technology has on our lives.
        </p>
        <div className={styles.socials}>
          <img src="a-buttonone.png" />
          <img src="a-buttontwo.png" />
          <img src="a-buttonthird.png" />
          <img src="a-buttonfourth.png" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
