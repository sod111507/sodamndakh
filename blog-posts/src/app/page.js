import styles from "../app/page.module.css";
import Timer from "./component/page";
export default function Home() {
  return (
    <div className={styles.effect}>
      <Timer />
    </div>
  );
}
