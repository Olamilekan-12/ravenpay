import React, { useState } from 'react';
import MainLayout from '../components/templates/MainLayout';

const Markets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock trading pairs data - will be replaced with API data
  const mockTradingPairs = [
    { symbol: 'BTC/USDT', price: '45,123.45', change: '+2.5%' },
    { symbol: 'ETH/USDT', price: '3,456.78', change: '+1.2%' },
    { symbol: 'BNB/USDT', price: '567.89', change: '-0.8%' },
    { symbol: 'SOL/USDT', price: '123.45', change: '+5.6%' },
    { symbol: 'ADA/USDT', price: '1.23', change: '-2.1%' },
  ];

  // Filter trading pairs based on search term
  const filteredPairs = mockTradingPairs.filter(pair =>
    pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="markets-container">
        <h1>Markets</h1>
        <p>Explore cryptocurrency markets and trading pairs</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search trading pairs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="trading-pairs-list">
          <div className="trading-pair-header">
            <span>Pair</span>
            <span>Price</span>
            <span>24h Change</span>
          </div>
          
          {filteredPairs.map((pair, index) => (
            <div key={index} className="trading-pair-item">
              <span>{pair.symbol}</span>
              <span>{pair.price}</span>
              <span className={pair.change.startsWith('+') ? 'positive' : 'negative'}>
                {pair.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Markets;
