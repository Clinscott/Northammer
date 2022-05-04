import Link from "next/link";
import styles from "./layout.module.css";

export default function Button({ title, link }) {
  return (
    <div className={styles.main}>
      <Link href={link}>{title}</Link>
    </div>
  );
}
