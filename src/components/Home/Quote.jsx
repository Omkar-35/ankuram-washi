import React from 'react';
import './Quote.css'; 

function Quote() {
  return (
    <div className="quote-banner text-center">
      <h3 className="quote-title">Sprouting Knowledge and Skills </h3>
      <p className="quote-text">
        "Inspired by the meaning of <strong>Ankuram</strong> — the first bud — we aim to provide a strong foundation through CBSE
        aligned learning that supports holistic growth at every stage.”
      </p>
      <p className="quote-author">
        — Dr. Vinod Pawar<br />
        (Founder, AVM Washi)
      </p>
    </div>
  );
}

export default Quote;
