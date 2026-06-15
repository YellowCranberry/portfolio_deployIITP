import { useState, useRef, useEffect } from 'react';
import { chatbotData } from '../data/facultyData';
import styles from './Chatbot.module.css';

function getResponse(input) {
  const lower = input.toLowerCase();
  for (const faq of chatbotData.faqs) {
    if (faq.keywords.some(kw => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return chatbotData.defaultResponse;
}

/* Simple markdown-ish rendering: **bold**, \n\n = paragraph, \n• = list */
function renderText(text) {
  return text.split('\n\n').map((para, pi) => {
    const lines = para.split('\n');
    return (
      <div key={pi} style={{ marginBottom: pi < text.split('\n\n').length - 1 ? 10 : 0 }}>
        {lines.map((line, li) => {
          const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
          return <div key={li} dangerouslySetInnerHTML={{ __html: formatted }} style={{ lineHeight: 1.55 }} />;
        })}
      </div>
    );
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: chatbotData.greetings[0] }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);

  const send = (text) => {
    const q = (text || input).trim();
    if (!q || typing) return;
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: getResponse(q) }]);
    }, 500 + Math.random() * 400);
  };

  return (
    <>
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close assistant' : 'Open academic assistant'}
        aria-expanded={open}
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className={styles.window} role="dialog" aria-label="Academic assistant">
          <header className={styles.header}>
            <div>
              <div className={styles.headerTitle}>Academic Assistant</div>
              <div className={styles.headerSub}>Ask about research, PhD, publications…</div>
            </div>
            <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </header>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}>
                {msg.role === 'bot' && <div className={styles.botDot}>∑</div>}
                <div className={styles.bubble}>
                  {msg.role === 'bot' ? renderText(msg.text) : msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className={`${styles.msg} ${styles.msgBot}`}>
                <div className={styles.botDot}>∑</div>
                <div className={`${styles.bubble} ${styles.typingBubble}`}>
                  <span className={styles.typeDot} /><span className={styles.typeDot} /><span className={styles.typeDot} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className={styles.suggestions}>
              {chatbotData.suggestions.map(s => (
                <button key={s} className={styles.sugBtn} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <div className={styles.inputBar}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder="Type a question…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              disabled={typing}
              aria-label="Chat input"
            />
            <button className={styles.sendBtn} onClick={() => send()} disabled={!input.trim() || typing} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
