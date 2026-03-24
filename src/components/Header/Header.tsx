import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="The Auction Department Logo" className={styles.logoImg} />
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/properties" className={styles.navLink}>Properties</Link></li>
            <li><Link href="/sell" className={styles.navLink}>Sell</Link></li>
            <li><Link href="/buy" className={styles.navLink}>Buy</Link></li>
            <li><Link href="/valuation" className={styles.navLink}>Valuation</Link></li>
            <li><Link href="/calendar" className={styles.navLink}>Auction Dates</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/register" className={`btn btn-primary ${styles.ctaBtn}`}>Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
