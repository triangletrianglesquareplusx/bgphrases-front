import styles from "./navbar.module.css";
import { siteConstants } from "../../../public/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.textCenter}>
          <Link href="/" style={{textDecoration: "none"}}>{siteConstants.siteTitle}
          <span>{siteConstants.siteTitleDomain}</span>
          </Link>
      </h1>
    </nav>
  );
}
