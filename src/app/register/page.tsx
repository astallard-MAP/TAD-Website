'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // 1. Create Auth User
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // 2. Update Auth Display Name
      await updateProfile(user, { displayName: formData.fullName });

      // 3. Create Firestore User Document
      // Splitting name for the UserProfile interface
      const nameParts = formData.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const surname = nameParts.slice(1).join(' ') || '';

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: firstName,
        surname: surname,
        displayName: formData.fullName,
        email: formData.email,
        mobile: formData.phone,
        role: 'Public member',
        status: 'Active',
        createdAt: new Date().toISOString()
      });

      // 4. Redirect to profile
      router.push('/profile');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.registerCard}>
        <div className={styles.logo}>
          THE <span className={styles.accent}>AUCTION</span> DEPARTMENT
        </div>
        <h1>Create Your Profile</h1>
        <p className={styles.subtitle}>Join the UK's most transparent property auction community.</p>

        {error && <div className={styles.errorBanner}>{error}</div>}

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              required 
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="email@address.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input 
              type="tel" 
              placeholder="0203..." 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              disabled={isLoading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Create Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              disabled={isLoading}
            />
          </div>
          <button type="submit" className={`btn btn-secondary ${styles.submitBtn}`} disabled={isLoading}>
            {isLoading ? 'Creating Profile...' : 'Create Profile'}
          </button>
        </form>

        <div className={styles.footerLinks}>
          <span>Already have an account?</span>
          <Link href="/login" className={styles.loginLink}>Log In</Link>
        </div>
      </div>
    </div>
  );
}
