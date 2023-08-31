import styles from "../app/page.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <img src="Logo.png" />
      <div className={styles.texts}>
        <h3>Home</h3>
        <h3>Blog</h3>
        <h3>Single Post</h3>
        <h3>Pages</h3>
        <h3>Contact</h3>
      </div>
      <input type="text" placeholder="Search" />
      <div className={styles.themeholder}></div>
    </div>
  );
};

export default Header;
