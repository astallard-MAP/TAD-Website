'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/profile');
    } catch (err: any) {
      console.error(err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          THE <span className={styles.accent}>AUCTION</span> DEPARTMENT
        </div>
        <h1>Log In to Your Portal</h1>
        <p className={styles.subtitle}>Unlock exclusive property features and track your bids.</p>

        {error && <div className={styles.errorBanner}>{error}</div>}

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="email@address.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label>Password</label>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <Link href="/forgot-password" className={styles.forgotPass}>Forgot password?</Link>
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.footerLinks}>
          <span>Don&apos;t have an account?</span>
          <Link href="/register" className={styles.registerLink}>Register for Free</Link>
        </div>
      </div>
    </div>
  );
}
