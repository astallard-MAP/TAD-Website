'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from './forgot-password.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage({ type: 'success', text: 'Password reset email sent! Please check your inbox (and spam folder).' });
    } catch (error: any) {
      console.error("Reset failed:", error);
      setMessage({ type: 'error', text: error.message || 'Failed to send reset email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>Reset Password</h1>
          <p>Enter your email and we'll send you a link to reset your password.</p>
        </div>

        {message && (
          <div className={`${styles.message} ${message.type === 'success' ? styles.success : styles.error}`}>
            {message.text}
          </div>
        )}

        {!message?.text.includes('sent') && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="name@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}

        <div className={styles.footer}>
          <span>Remembered your password? </span>
          <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
