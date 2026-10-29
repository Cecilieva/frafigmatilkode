import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <PillModal label="Primary" type="primary" title="Rick’s Laws">
          jo flere jo bedre
        </PillModal>
        <PillModal label="Secondary" type="secondary" title="Rick’s Laws" showSeparator={false}>
          jo flere jo bedre
        </PillModal>
      </div>
    </main>
  );
}
