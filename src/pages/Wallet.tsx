import React from 'react';
import MainLayout from '../components/templates/MainLayout';

const Wallet: React.FC = () => {
  // Mock wallet data - will be replaced with actual data
  const mockAssets = [
    { coin: 'Bitcoin', ticker: 'BTC', balance: '0.25', value: '11,280.86' },
    { coin: 'Ethereum', ticker: 'ETH', balance: '5.5', value: '19,012.29' },
    { coin: 'Binance Coin', ticker: 'BNB', balance: '12', value: '6,814.68' },
    { coin: 'Solana', ticker: 'SOL', balance: '45', value: '5,555.25' },
  ];

  const totalValue = mockAssets.reduce(
    (sum, asset) => sum + parseFloat(asset.value.replace(',', '')), 
    0
  ).toLocaleString();

  return (
    <MainLayout>
      <div className="wallet-container">
        <h1>Wallet</h1>
        <p>Manage your cryptocurrency assets</p>
        
        <div className="wallet-summary">
          <div className="total-balance">
            <h2>Total Balance</h2>
            <p className="balance-value">${totalValue}</p>
          </div>
          
          <div className="wallet-actions">
            <button>Deposit</button>
            <button>Withdraw</button>
            <button>Transfer</button>
          </div>
        </div>
        
        <div className="assets-list">
          <h2>Your Assets</h2>
          <div className="assets-header">
            <span>Coin</span>
            <span>Balance</span>
            <span>Value (USD)</span>
          </div>
          
          {mockAssets.map((asset, index) => (
            <div key={index} className="asset-item">
              <div className="asset-name">
                <span>{asset.coin}</span>
                <span className="ticker">{asset.ticker}</span>
              </div>
              <span>{asset.balance}</span>
              <span>${asset.value}</span>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Wallet;
