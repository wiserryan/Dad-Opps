import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h2>Info Page</h2>
      <p>
      COVID created the perfect time to get outside and "safely" recon and explore our Saint Paul parks. 
      Minnesota makes great use of it's green spaces during the nice times of the year. The idea behind this project is to be able search for nearby 
      playgrounds. A stretch goal would be to have this app filter by area code and region. 
      </p>
      <h3>
        Thank you for visiting Dad Opps
      </h3>
    </div>
  );
}

export default InfoPage;
