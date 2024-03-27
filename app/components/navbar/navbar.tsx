import styles from "./navbar.module.css";
import { siteConstants } from "../../../public/constants";
export default function Navbar() {
  return (
    <nav>
      <h1 className={styles.textCenter}>
        {siteConstants.siteTitle}<span>{siteConstants.siteTitleDomain}</span>
      </h1>
    </nav>
  );
}
