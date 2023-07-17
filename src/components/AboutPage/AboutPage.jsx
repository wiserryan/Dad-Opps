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
<br></br>

<br></br>            
            Thanks to Prime Digital Academy who helped make this application possible. 
            Major kudos to our cohort instructor, Chris Black, as well as our Code Coach 
            Marc McCarthy. Thanks to their unending patience and positivity, this app went from concept to functional. 
            To my cohort classmates in Tanzanite, thank you for making the journey a memorable one! 
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
