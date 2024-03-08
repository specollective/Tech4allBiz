import styles from "./page.module.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Main Portion</div>
      <Footer />
    </main>
  );
}
