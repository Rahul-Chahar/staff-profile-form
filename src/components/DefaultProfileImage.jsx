// File: src/components/DefaultProfileImage.jsx
import React from 'react';

const DefaultProfileImage = ({ className = '' }) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#f0f3f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#aab4c8',
    fontSize: '48px',
    fontWeight: '300'
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={imageStyle}>
        {/* User silhouette icon */}
        <svg 
          width="60" 
          height="60" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    </div>
  );
};

export default DefaultProfileImage;