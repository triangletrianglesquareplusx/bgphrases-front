import styles from "./footer.module.css";
import { bgjargonUrls } from "../../../public/constants";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.linkContainer}>
        <div>
          <a
            href="https://asset.cloudinary.com/dvoaat0nl/80118a955e798bdf94c3ecd79bcef235"
            className={styles.linkItem}
          >
            fun
          </a>
          |
          <a href="#" className={styles.linkItem}>
            blog
          </a>{" "}
          |
          <a href="#" className={styles.linkItem}>
            mag
          </a>
        </div>
        <div>
          {bgjargonUrls.map((pair, i) =>
            i == bgjargonUrls.length - 1 ? (
              <a key={pair[0]} href={pair[1]} className={styles.linkItem}>
                {pair[0]}
              </a>
            ) : (
              <>
                <a key={pair[0]} href={pair[1]} className={styles.linkItem}>
                  {pair[0]}
                </a>{" "}
                |
              </>
            )
          )}
        </div>
      </div>
      <p className={styles.warning}>
        This is a <a href="https://www.bgjargon.com/">bgjargon.com</a> clone
        made so I can escape homelessness. Browse with care.
      </p>
    </footer>
  );
};

export default Footer;
