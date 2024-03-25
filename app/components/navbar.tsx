import styles from "./navbar.module.css";
import { siteConstants } from "../../public/constants";
export default function Navbar() {
  return (
    <nav>
      <h1 className={styles.textCenter}>
        БГЖАРГОН<span>.com</span>
      </h1>
      <h2>{siteConstants.siteTitle}</h2>
    </nav>
  );
}
