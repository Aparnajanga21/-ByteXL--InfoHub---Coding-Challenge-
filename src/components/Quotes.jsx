import React, { useState } from 'react';
import { fetchQuote } from '../api';

export default function Quotes() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  async function handleGet() {
    setLoading(true);
    setError(null);
    try {
      const json = await fetchQuote();
      if (json.success) {
        setQuote(json.data);
      } else {
        setError(json.error || 'Failed to fetch quote');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <button onClick={handleGet}>Get Motivational Quote</button>
      {loading && <div className="info">Loading quote…</div>}
      {error && <div className="error">{error}</div>}
      {quote && (
        <div className="quote">
          <blockquote>"{quote.content}"</blockquote>
          <div className="author">— {quote.author || 'Unknown'}</div>
        </div>
      )}
    </div>
  );
}
