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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setDropdownOpen(false);
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
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/properties" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Properties</Link></li>
            <li><Link href="/sell" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Sell</Link></li>
            <li><Link href="/buy" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Buy</Link></li>
            <li><Link href="/instant-offer" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Get an Instant Offer</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.mobileToggle} 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          {user ? (
            <div className={styles.userSection}>
              <div 
                className={styles.avatarTrigger} 
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className={styles.userAvatar} />
                ) : (
                  <div className={styles.avatarFallback}>
                    {(user.displayName || user.email || 'U')[0].toUpperCase()}
                  </div>
                )}
              </div>
              
              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <Link 
                    href="/profile" 
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    👤 Edit Profile
                  </Link>
                  <button onClick={handleLogout} className={styles.dropdownItem}>
                    🚪 Sign Out
                  </button>
                </div>
              )}
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
