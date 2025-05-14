import axios from 'axios';

// Base URL for the Binance API
const BASE_URL = 'https://api.binance.com/api/v3';

// API service for cryptocurrency data
const api = {
  // Get all trading pairs
  getTradingPairs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/ticker/24hr`);
      return response.data;
    } catch (error) {
      console.error('Error fetching trading pairs:', error);
      throw error;
    }
  },

  // Get candlestick data for a specific symbol and interval
  getCandlestickData: async (symbol: string, interval: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/klines`, {
        params: {
          symbol,
          interval,
          limit: 500,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching candlestick data:', error);
      throw error;
    }
  },

  // Get order book for a specific symbol
  getOrderBook: async (symbol: string, limit: number = 100) => {
    try {
      const response = await axios.get(`${BASE_URL}/depth`, {
        params: {
          symbol,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching order book:', error);
      throw error;
    }
  },
};

export default api;
