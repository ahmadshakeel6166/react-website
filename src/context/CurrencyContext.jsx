import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

const EXCHANGE_RATES = {
  PKR: 1,
  USD: 0.0036, // 1 USD ~ 278 PKR
  GBP: 0.0028, // 1 GBP ~ 357 PKR
  AED: 0.0132  // 1 AED ~ 76 PKR
};

const SYMBOLS = {
  PKR: 'Rs. ',
  USD: '$',
  GBP: '£',
  AED: 'AED '
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('elan_currency') || 'PKR';
  });

  useEffect(() => {
    localStorage.setItem('elan_currency', currency);
  }, [currency]);

  const formatPrice = (pkrAmount) => {
    if (typeof pkrAmount !== 'number') return '';
    const rate = EXCHANGE_RATES[currency] || 1;
    const symbol = SYMBOLS[currency] || 'Rs. ';
    
    if (currency === 'PKR') {
      return `${symbol}${pkrAmount.toLocaleString()}`;
    }
    
    const converted = pkrAmount * rate;
    return `${symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currencies: ['PKR', 'USD', 'GBP', 'AED'] }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
