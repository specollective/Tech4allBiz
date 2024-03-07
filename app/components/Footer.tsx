import styles from "@/app/page.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>&copy; Copyright {currentYear} - tech4allbiz</div>
    </footer>
  );
}
