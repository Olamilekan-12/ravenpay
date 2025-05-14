// We'll use a simple hash function instead of crypto for browser compatibility

// Service for Gravatar and GitHub integration
const gravatarService = {
  // Generate a simple hash for Gravatar
  // Note: In a production app, you would use a proper MD5 library like crypto-js
  generateHash: (email: string): string => {
    // Simple string to hash function (not cryptographically secure)
    const normalizedEmail = email.trim().toLowerCase();
    let hash = 0;
    
    for (let i = 0; i < normalizedEmail.length; i++) {
      const char = normalizedEmail.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Convert to hex string and ensure it's positive
    return Math.abs(hash).toString(16);
  },

  // Get Gravatar URL
  getGravatarUrl: (email: string, size: number = 200): string => {
    const hash = gravatarService.generateHash(email);
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=${size}`;
  },

  // Get GitHub repositories associated with an email
  getGithubRepos: async (userEmail: string) => {
    try {
      // This is a simplified example. In a real implementation,
      // you would need to use GitHub's API to search for users by email
      // and then fetch their repositories.
      
      console.log(`Fetching GitHub repos for email: ${userEmail}`);
      
      // For now, we'll simulate a response
      // In a real app, you would use the GitHub API:
      // const response = await fetch(`https://api.github.com/search/users?q=${userEmail}`);
      
      return [
        { name: 'crypto-exchange', description: 'A cryptocurrency exchange platform', stars: 25 },
        { name: 'blockchain-wallet', description: 'A secure blockchain wallet', stars: 18 },
        { name: 'trading-bot', description: 'Automated trading bot for crypto markets', stars: 42 },
      ];
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  },
};

export default gravatarService;
