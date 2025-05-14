// API related constants
export const API_CONSTANTS = {
  BINANCE_BASE_URL: 'https://api.binance.com/api/v3',
  GITHUB_API_URL: 'https://api.github.com',
  GRAVATAR_BASE_URL: 'https://www.gravatar.com/avatar',
};

// Time intervals for candlestick charts
export const TIME_INTERVALS = [
  { label: '1m', value: '1m' },
  { label: '5m', value: '5m' },
  { label: '15m', value: '15m' },
  { label: '30m', value: '30m' },
  { label: '1h', value: '1h' },
  { label: '4h', value: '4h' },
  { label: '1d', value: '1d' },
  { label: '1w', value: '1w' },
  { label: '1M', value: '1M' },
];

// Default trading pair
export const DEFAULT_TRADING_PAIR = 'BTCUSDT';

// Default chart interval
export const DEFAULT_INTERVAL = '1h';

// Order types
export const ORDER_TYPES = {
  MARKET: 'MARKET',
  LIMIT: 'LIMIT',
  STOP_LIMIT: 'STOP_LIMIT',
  STOP_MARKET: 'STOP_MARKET',
};

// Order sides
export const ORDER_SIDES = {
  BUY: 'BUY',
  SELL: 'SELL',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER_EMAIL: 'raven_user_email',
  FAVORITE_PAIRS: 'raven_favorite_pairs',
  THEME: 'raven_theme',
  LAST_VIEWED_PAIR: 'raven_last_pair',
};

// Routes
export const ROUTES = {
  DASHBOARD: '/',
  MARKETS: '/markets',
  WALLET: '/wallet',
  PROFILE: '/profile',
  AUTH: '/auth',
};

// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};
