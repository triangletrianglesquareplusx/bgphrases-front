import styles from "./singlephrase.module.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Link from "next/link";
import AuthorInfoPane from "../authorInfo/authorInfopane";
import {convertRawDateStringIntoHumanReadableDate} from '../../../public/helpers';

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
  date,
}: singlePhraseProps) {
  const [resultDate, resultTime] = convertRawDateStringIntoHumanReadableDate(date);
  return (
    //having headings with sections is default semantic behaviour
    
    <section className={styles.sectionBody}>
      <h3 className={styles.sectionHeader}>
        {isExpanded ? (
          <p>{title}</p>
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
          <p className={styles.date}>{resultDate} at {resultTime}</p>
        </>
      ) : (
        <></>
      )}
      
      <div className={styles.voteContainer}>
        <div className={styles.singleVoteContainer}>
          <span style={{ padding: 7 }}>{likes}</span>
          <FaThumbsUp className={styles.voteIcon} />
        </div>
        <div className={styles.singleVoteContainer}>
          <span style={{ padding: 7 }}>{dislikes}</span>
          <FaThumbsDown className={styles.voteIcon} />
        </div>
      </div>
      
      {isExpanded ? <div>
        <p>Tags: </p>
      </div> : ''}
      
    </section>
  );
}
