'use client';

import React, { useState } from 'react';
import styles from './FrankAI.module.css';

const FrankAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'frank', text: "Leap into your next investment! I'm Frank Tadsworth-Bids, your personal auctioneer. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate Frank's response
    setTimeout(() => {
      const frankMsg = { role: 'frank', text: "By the fall of the hammer, I'll find that answer! Let me check the current auction lots for you..." };
      setMessages(prev => [...prev, frankMsg]);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {/* Floating Button featuring Frank's face */}
      <button className={styles.launcher} onClick={() => setIsOpen(!isOpen)} aria-label="Chat with Frank">
        <div className={styles.avatarWrapper}>
          <img src="/images/face.png" alt="Frank's face" className={styles.faceImg} />
        </div>
        <span className={styles.label}>Ask Frank</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerAvatar}>
              <img src="/images/face.png" alt="Frank" />
            </div>
            <div className={styles.headerTitle}>
              <h3>Frank Tadsworth-Bids</h3>
              <span>Brand Ambassador & AI Auctioneer</span>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                <div className={styles.msgBubble}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form className={styles.chatFooter} onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your message to Frank..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={styles.sendBtn}>&rarr;</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FrankAI;
