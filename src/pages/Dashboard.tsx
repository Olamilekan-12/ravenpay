import React from 'react';
import MainLayout from '../components/templates/MainLayout';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p>Welcome to the Raven Exchange Dashboard</p>
        <div className="dashboard-widgets">
          <div className="chart-container">
            <h2>Market Overview</h2>
            <div className="placeholder-chart">
              {/* Candlestick chart will be implemented here */}
              <p>Candlestick Chart Coming Soon</p>
            </div>
          </div>
          <div className="market-summary">
            <h2>Market Summary</h2>
            <div className="placeholder-data">
              <p>Trading data will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
