"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";
const Tail = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div className={styles.tail}>
      <div className={styles.tailthing}>
        <div className={styles.finel}>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore
            <br /> et dolore magna aliqua. Ut enim ad
            <br />
            minim veniam
          </p>
          <div className={styles.register}>
            <div class={styles.regifirst}>
              <h3>Email:</h3>
              <p>info@jstemplate.net</p>
            </div>
            <div class={styles.regisecond}>
              <h3>Phone:</h3>
              <p>880 123 456 789</p>
            </div>
          </div>
        </div>

        <div className={styles.fainel2nd}>
          <div className={styles.topper}>
            <h3>Quick Link</h3>
          </div>
          <div className={styles.guilt}>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Blog</h5>
            <h5>Archived</h5>
            <h5>Author</h5>
            <h5>Contact</h5>
          </div>
        </div>
        <div className={styles.fainel2nd}>
          <div className={styles.topper}>
            <h3>Category</h3>
          </div>
          <div className={styles.guilt}>
            <h5>Lifestyle</h5>
            <h5>Technology</h5>
            <h5>Travel</h5>
            <h5>Business</h5>
            <h5>Economy</h5>
            <h5>Sports</h5>
          </div>
        </div>
        <div className={styles.subs}>
          <div className={styles.firstsub}>
            <h3>Weekly Newsletter</h3>
            <p>Get blog articles and offers via email</p>
          </div>
          <div className={styles.inpoot}>
            <input
              className={styles.inpot}
              type="text"
              placeholder="Your Email"
            />
            <img src="mail.png" />
          </div>
          <button className={styles.bluebutton}>Subscribe</button>
        </div>
      </div>
      <div className={styles.finaler}>
        <img src="Copyright.png" />
        <div className={styles.tailer}>
          <h5>Terms of Use</h5>
          <div className={styles.divider}></div>
          <h5>Privacy Policy</h5>
          <div className={styles.divider}></div>
          <h5>Cookie Policy</h5>
        </div>
      </div>
    </div>
  );
};

export default Tail;
