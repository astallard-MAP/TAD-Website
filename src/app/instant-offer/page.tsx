'use client';

import React, { useState } from 'react';
import styles from './instant-offer.module.css';
import Link from 'next/link';

export default function InstantOfferPage() {
  const [formData, setFormData] = useState({
    postcode: '',
    propertyType: '',
    bedrooms: '',
    reason: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✨</div>
          <h1>Offer Request Received!</h1>
          <p>Thank you, {formData.name}. One of our property specialists is reviewing your details right now. We will be in touch with your instant cash offer within the next hour.</p>
          <Link href="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>Speed & Certainty</span>
            <h1>Get an Instant Cash Offer for Your Property</h1>
            <p>Sell your property in days, not months. No fees, no commissions, and a guaranteed sale on your timeline.</p>
            
            <div className={styles.uspGrid}>
              <div className={styles.uspItem}>
                <span className={styles.uspIcon}>💷</span>
                <span>0% Commission</span>
              </div>
              <div className={styles.uspItem}>
                <span className={styles.uspIcon}>⚡</span>
                <span>Offer in 24 Hours</span>
              </div>
              <div className={styles.uspItem}>
                <span className={styles.uspIcon}>🤝</span>
                <span>Guaranteed Sale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Form */}
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.infoLeft}>
            <h2>Why Sell Directly to Us?</h2>
            <p>Traditional property sales can be slow, stressful, and expensive. Our "Instant Offer" service bypasses the open market entirely, giving you a direct route to liquidity.</p>
            
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <div>
                  <h4>Submit Your Details</h4>
                  <p>Tell us about your property using the form on this page. It takes less than 60 seconds.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <div>
                  <h4>Receive Your Offer</h4>
                  <p>Our experts will evaluate your property and provide a formal cash offer within 24 hours.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <div>
                  <h4>Complete in Your Time</h4>
                  <p>Choose your completion date. We can close the deal in as little as 7 days or work to your schedule.</p>
                </div>
              </div>
            </div>

            <div className={styles.quoteBox}>
              <p>"Selling to The Auction Department was the easiest transaction I've ever made. No viewings, no chains, just a fair price and a fast completion."</p>
              <span>— Sarah J., London Seller</span>
            </div>
          </div>

          <aside className={styles.formSidebar}>
            <div className={styles.offerForm}>
              <h3>Get Your Free Offer</h3>
              <p>Enter your details below to start the process.</p>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Property Postcode</label>
                  <input 
                    type="text" 
                    placeholder="e.g. SS1 2PQ" 
                    required 
                    value={formData.postcode}
                    onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Property Type</label>
                    <select 
                      required
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    >
                      <option value="">Select...</option>
                      <option>House</option>
                      <option>Flat</option>
                      <option>Bungalow</option>
                      <option>Land</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Bedrooms</label>
                    <select 
                      required
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                    >
                      <option value="">Select...</option>
                      <option>Studio</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                   <label>Reason for Selling</label>
                   <select 
                     required
                     value={formData.reason}
                     onChange={(e) => setFormData({...formData, reason: e.target.value})}
                   >
                     <option value="">Select reason...</option>
                     <option>Financial difficulties</option>
                     <option>Relocating</option>
                     <option>Inheritance / Probate</option>
                     <option>Downsizing</option>
                     <option>Other</option>
                   </select>
                </div>

                <div className={styles.divider}>Contact Details</div>

                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 07700 900000" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Request Instant Offer'}
                </button>
                <p className={styles.formFooter}>By submitting, you agree to our privacy policy. No obligation to sell at any stage.</p>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
