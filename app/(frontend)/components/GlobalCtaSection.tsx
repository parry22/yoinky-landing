import AppButton from "./AppButton";
import styles from "./GlobalCtaSection.module.css";

export default function GlobalCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.card}>
        <div className={styles.copy}>
          <h2 id="cta-heading">Your company has<br />more to say.</h2>
          <p>Bring your calls, documents, and customer proof together, then turn them into a narrative and content your team can actually use.</p>
          <AppButton label="Find your story" size="md" />
        </div>
      </div>
    </section>
  );
}
