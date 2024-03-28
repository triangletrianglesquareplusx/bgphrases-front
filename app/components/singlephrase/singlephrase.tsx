import styles from "./singlephrase.module.css";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

type SinglePhrase = {
  key: number;
  title: string;
  explanation: string;
  examplePhrase: string;
  likes: number;
  dislikes: number;
};

export default function SinglePhrase({
  title,
  explanation,
  examplePhrase,
  likes,
  dislikes
}: SinglePhrase) {
  return (
    //having headings with sections is default semantic behaviour
    <section className={styles.sectionBody}>
      <h3 className={styles.sectionHeader}>{title}</h3>
      <p className={styles.initialText}>{explanation}</p>
      <p className={styles.explanationText}>{examplePhrase}</p>
      <div className={styles.voteContainer}>
        <div>
          <span style={{ padding: 7 }}>{likes}</span>
          <FaRegThumbsUp />
        </div>
        <div>
          <span style={{ padding: 7 }}>{dislikes}</span>
          <FaRegThumbsDown />
        </div>
      </div>
    </section>
  );
}
