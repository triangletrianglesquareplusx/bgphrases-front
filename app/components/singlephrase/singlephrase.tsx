import styles from './singlephrase.module.css';

type SinglePhrase = {
  key: number;
  title: string;
  explanation: string;
  examplePhrase: string;
};

export default function SinglePhrase({
  title,
  explanation,
  examplePhrase,
}: SinglePhrase) {
  return (
    //having headings with sections is default semantic behaviour
    <section className={styles.sectionBody}>
      <h3 className={styles.sectionHeader}>{title}</h3>
      <p className={styles.initialText}>{explanation}</p>
      <p className={styles.initialText}>{examplePhrase}</p>
    </section>
  );
}
