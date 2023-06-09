import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This application was designed and developed by 
          <h3>Ryan Wiser</h3>
          for Prime Digital Academy.
          </p>
          <p>
            Some of the technologies used to build this app include React, 
            Redux, Redux-Saga, Node, Express, and SQL.
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
