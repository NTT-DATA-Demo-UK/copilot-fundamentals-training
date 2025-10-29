import React, { useState } from 'react';
import './RepositoryForker.css';

/**
 * Component for forking GitHub repositories
 * @returns {JSX.Element} The repository forker component
 */
function RepositoryForker() {
  const [repositoryUrl, setRepositoryUrl] = useState('https://github.com/hitachi-rail-workshop-org-2025-10-07/code-along');
  const [isForking, setIsForking] = useState(false);
  const [forkStatus, setForkStatus] = useState('');
  const [forkError, setForkError] = useState('');

  const parseRepositoryUrl = (url) => {
    try {
      const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        return {
          owner: match[1],
          repo: match[2].replace('.git', '')
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const forkRepository = async () => {
    setIsForking(true);
    setForkStatus('');
    setForkError('');

    const repoInfo = parseRepositoryUrl(repositoryUrl);
    if (!repoInfo) {
      setForkError('Invalid GitHub repository URL. Please use format: https://github.com/owner/repo');
      setIsForking(false);
      return;
    }

    try {
      // Since we cannot make direct API calls to GitHub from a client-side app without authentication,
      // we'll simulate the forking process and provide user guidance
      setForkStatus('Preparing to fork repository...');
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate the fork URL that the user would need to visit
      const forkUrl = `https://github.com/${repoInfo.owner}/${repoInfo.repo}/fork`;
      
      setForkStatus(`To fork this repository, please visit: ${forkUrl}`);
      
      // Try to open the fork URL in a new tab
      window.open(forkUrl, '_blank');
      
    } catch (error) {
      setForkError(`Error preparing fork: ${error.message}`);
    } finally {
      setIsForking(false);
    }
  };

  return (
    <div className="repository-forker">
      <div className="forker-header">
        <h2>🍴 Repository Forker</h2>
        <p>Fork GitHub repositories to your account</p>
      </div>
      
      <div className="forker-form">
        <div className="input-group">
          <label htmlFor="repository-url">Repository URL:</label>
          <input
            id="repository-url"
            type="text"
            value={repositoryUrl}
            onChange={(e) => setRepositoryUrl(e.target.value)}
            placeholder="https://github.com/owner/repository"
            className="repository-input"
            disabled={isForking}
          />
        </div>
        
        <button 
          onClick={forkRepository} 
          disabled={isForking || !repositoryUrl.trim()}
          className="fork-button"
        >
          {isForking ? 'Forking...' : '🍴 Fork Repository'}
        </button>
      </div>

      {forkStatus && (
        <div className="status-message success">
          <h3>✅ Fork Ready</h3>
          <p>{forkStatus}</p>
          <small>Note: You will need to be logged in to GitHub to complete the fork.</small>
        </div>
      )}

      {forkError && (
        <div className="status-message error">
          <h3>❌ Error</h3>
          <p>{forkError}</p>
        </div>
      )}

      <div className="help-section">
        <h3>📋 How to Fork</h3>
        <ol>
          <li>Enter or verify the GitHub repository URL above</li>
          <li>Click the "Fork Repository" button</li>
          <li>You'll be redirected to GitHub's fork page</li>
          <li>Log in to GitHub if prompted</li>
          <li>Complete the fork process on GitHub</li>
        </ol>
        
        <div className="info-box">
          <h4>Default Repository:</h4>
          <p>This tool is pre-configured to fork the <strong>hitachi-rail-workshop-org-2025-10-07/code-along</strong> repository for training purposes.</p>
        </div>
      </div>
    </div>
  );
}

export default RepositoryForker;