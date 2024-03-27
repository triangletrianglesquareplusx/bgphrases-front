import styles from "./hero.module.css";

export default function Hero({ children }: { children: React.ReactNode }) {
  return <main className={styles.alignment}>{children}</main>;
}
