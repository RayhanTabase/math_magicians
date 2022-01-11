import React, { useState, useEffect } from 'react';
import './Quote.css';

function Quote() {
  const [quoteData, setQuoteData] = useState({
    author: 'William Paul Thurston',
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
  });
  const getRandomQuote = async () => {
    const request = await fetch('https://random-math-quote-api.herokuapp.com');
    const response = await request.json();
    setQuoteData(response);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const { author, quote } = quoteData;
  return (
    <div className="container quoteContainer">
      <p>
        <span>
          {quote}
        </span>
        <span>
          {quote ? '  -  ' : ''}
        </span>
        <span className="italize">
          {author}
        </span>
      </p>
    </div>
  );
}

export default Quote;
