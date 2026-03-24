import styles from './legal.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>
      </div>

      <div className={styles.legalBody}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>The Auction Department Limited ("we", "us", or "our") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul>
            <li>Information you provide by filling in forms on our site.</li>
            <li>If you contact us, we may keep a record of that correspondence.</li>
            <li>Details of your visits to our site including, but not limited to, traffic data, location data, weblogs and other communication data.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies</h2>
          <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy.</p>
        </section>

        <section className={styles.section}>
           <h2>4. Disclosure of Your Information</h2>
           <p>We may disclose your personal information to any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.</p>
           <p>We may disclose your personal information to third parties in the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.</p>
        </section>
      </div>
    </div>
  );
}
