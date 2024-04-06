import styles from "./hero.module.css";

export default function Hero({
  children,
  isExpandedView,
}: {
  children: React.ReactNode;
  isExpandedView: boolean;
}) {
  return (
    <main
      className={isExpandedView ? styles.rowAlignment : styles.columnAlignment}
    >
      {children}
    </main>
  );
}
