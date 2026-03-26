'use client';

import React, { useState, useEffect } from 'react';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [keysHeld, setKeysHeld] = useState(false);

  useEffect(() => {
    // Check if site is already unlocked
    const isUnlocked = localStorage.getItem('site_unlocked');
    if (isUnlocked === 'true') {
      setIsVisible(false);
    }

    // Monitor Ctrl + Shift for cursor changes
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey) setKeysHeld(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) setKeysHeld(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleUnlock = (e: React.MouseEvent) => {
    // Only unlock if Ctrl and Shift are held during the click
    if (e.ctrlKey && e.shiftKey) {
      setIsVisible(false);
      localStorage.setItem('site_unlocked', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Com
        <span className={styles.secretTrigger}>
          i
          <div 
            className={styles.dotTrigger} 
            onClick={handleUnlock}
            style={{ cursor: keysHeld ? 'pointer' : 'default' }}
            aria-label="Secure access"
          />
        </span>
        ng Soon..
      </h1>
    </div>
  );
};

export default ComingSoon;
