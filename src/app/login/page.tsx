import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          THE <span className={styles.accent}>AUCTION</span> DEPARTMENT
        </div>
        <h1>Log In to Your Portal</h1>
        <p className={styles.subtitle}>Unlock exclusive property features and track your bids.</p>

        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="email@address.com" required />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label>Password</label>
              <Link href="/forgot-password" className={styles.forgotPass}>Forgot password?</Link>
            </div>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Sign In</button>
        </form>

        <div className={styles.footerLinks}>
          <span>Don't have an account?</span>
          <Link href="/register" className={styles.registerLink}>Register for Free</Link>
        </div>
      </div>
    </div>
  );
}
