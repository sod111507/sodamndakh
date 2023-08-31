"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";
import Header from "./header";
import Profile from "./profile";
import Tail from "./tail";
const Component = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div>
      <div className={styles.all}>
        <Header />
        <Profile />
        <h1 className={styles.titled}>Latest Post</h1>
        <div className={styles.container}>
          {products?.products?.map(
            ({ thumbnail, title, description, brand, price }) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1p solid #E8E8EA",
                  margin: "10px",
                  width: "380px",
                  height: "400px",
                }}
              >
                <div className={styles.text}>
                  <div>
                    <img src={thumbnail} className={styles.image} />
                  </div>
                  <div>
                    <h1>{title}</h1>
                  </div>
                  <div>
                    <span className={styles.description}>{description}</span>
                  </div>
                  <div className={styles.brandPrice}>
                    <span>{brand}</span>
                    <span> ${price}</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Tail />
    </div>
  );
};

export default Component;
