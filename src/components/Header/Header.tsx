'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
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
          {user ? (
            <div className={styles.userSection}>
              <Link href="/profile" className={styles.profileIndicator}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className={styles.userAvatar} />
                ) : (
                  <div className={styles.avatarFallback}>
                    {(user.displayName || user.email || 'U')[0].toUpperCase()}
                  </div>
                )}
                <span className={styles.userName}>{user.displayName?.split(' ')[0] || 'My Portal'}</span>
              </Link>
              <button onClick={handleLogout} className={styles.logoutText}>Sign Out</button>
            </div>
          ) : (
            <>
              <Link href="/login" className={styles.loginBtn}>Login</Link>
              <Link href="/register" className={`btn btn-primary ${styles.ctaBtn}`}>Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
