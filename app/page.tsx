import styles from "@/app/page.module.css";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Main Portion</div>
      <Footer />
    </main>
  );
}
