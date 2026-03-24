import Link from 'next/link';
import styles from './register.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.registerCard}>
        <div className={styles.logo}>
          THE <span className={styles.accent}>AUCTION</span> DEPARTMENT
        </div>
        <h1>Create Your Profile</h1>
        <p className={styles.subtitle}>Join the UK's most transparent property auction community.</p>

        <form className={styles.registerForm}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="email@address.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input type="tel" placeholder="0203..." required />
          </div>
          <div className={styles.inputGroup}>
            <label>Create Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className={`btn btn-secondary ${styles.submitBtn}`}>Create Profile</button>
        </form>

        <div className={styles.footerLinks}>
          <span>Don&apos;t have an account?</span>
          <Link href="/login" className={styles.loginLink}>Log In</Link>
        </div>
      </div>
    </div>
  );
}
