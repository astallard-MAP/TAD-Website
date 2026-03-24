import styles from '../privacy-policy/legal.module.css';

export default function CookiePolicyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Cookie Policy</h1>
        <p>This policy details how we use cookies and similar technologies on our website.</p>
      </div>

      <div className={styles.legalBody}>
        <section className={styles.section}>
          <h2>1. What are Cookies?</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies to enhance your experience, monitor our website performance, and support our marketing efforts. Specifically, we use:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
            <li><strong>Preference Cookies:</strong> Allow the site to remember choices you make.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Managing Cookies</h2>
          <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
        </section>

        <section className={styles.section}>
           <h2>4. Contact Us</h2>
           <p>If you have any questions about our use of cookies, please contact us at info@auctiondepartment.com.</p>
        </section>
      </div>
    </div>
  );
}
