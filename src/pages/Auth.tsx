import React, { useState } from 'react';
import MainLayout from '../components/templates/MainLayout';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gravatarUrl, setGravatarUrl] = useState('');
  const [githubRepos, setGithubRepos] = useState<Array<{ name: string; description: string; stars: number }>>([]);
  const [error, setError] = useState('');
  
  // Function to generate MD5 hash (will be implemented or use a library)
  const generateMD5 = (input: string): string => {
    // This is a placeholder - in a real implementation, we would use a proper MD5 library
    // For now, we'll just return a dummy hash
    console.log('Generating MD5 for:', input);
    return 'dummy-hash';
  };
  
  // Function to fetch Gravatar
  const fetchGravatar = (email: string) => {
    const hash = generateMD5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
  };
  
  // Function to fetch GitHub repositories
  const fetchGithubRepos = async (email: string) => {
    try {
      // This would be a real API call in the implementation
      // For now, we'll just simulate a response
      console.log('Fetching GitHub repos for:', email);
      
      // Simulated response
      return [
        { name: 'project-1', description: 'A sample project', stars: 10 },
        { name: 'project-2', description: 'Another sample project', stars: 5 },
      ];
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      return [];
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Get Gravatar URL
      const avatarUrl = fetchGravatar(email);
      setGravatarUrl(avatarUrl);
      
      // Get GitHub repositories
      const repos = await fetchGithubRepos(email);
      setGithubRepos(repos);
      
      // In a real app, we might store the user info in context or state management
      // and redirect to the profile page
      // navigate('/profile');
    } catch (err) {
      setError('An error occurred while fetching user data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="auth-container">
        <h1>Authentication</h1>
        <p>Enter your email to login with Gravatar</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
              placeholder="your-email@example.com"
            />
          </div>
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Loading...' : 'Login with Gravatar'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        
        {gravatarUrl && (
          <div className="user-preview">
            <h2>Your Gravatar</h2>
            <img src={gravatarUrl} alt="Gravatar" className="gravatar-image" />
            
            {githubRepos.length > 0 && (
              <div className="github-repos">
                <h3>Your GitHub Repositories</h3>
                <ul className="repos-list">
                  {githubRepos.map((repo, index) => (
                    <li key={index} className="repo-item">
                      <h4>{repo.name}</h4>
                      <p>{repo.description}</p>
                      <span>⭐ {repo.stars}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Auth;
