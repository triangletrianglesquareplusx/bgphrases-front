import styles from "./singlephrase.module.css";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Link from "next/link";
import AuthorInfoPane from "../authorInfo/authorInfopane";

interface singlePhraseProps {
  key?: number;
  isExpanded: boolean;
  title: string;
  explanation: string;
  examplePhrase: string;
  likes: number;
  dislikes: number;
  authorId?: number;
  date?: string;
}

export default function SinglePhrase({
  isExpanded,
  title,
  explanation,
  examplePhrase,
  likes,
  dislikes,
  authorId,
  date
}: singlePhraseProps) {
  return (
    //having headings with sections is default semantic behaviour
    <section className={styles.sectionBody}>
      <h3 className={styles.sectionHeader}>
        {isExpanded ? (
          title
        ) : (
          <Link href={`/${title}`} style={{ textDecoration: "none" }}>
            {title}
          </Link>
        )}
      </h3>
      <p className={styles.initialText}>{explanation}</p>
      <p className={styles.explanationText}>{examplePhrase}</p>
      {isExpanded ? (
        <>
          <AuthorInfoPane authorId={authorId} />
          <p>{date}</p>
        </>
      ) : (
        <></>
      )}

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
