import React from 'react';
import NewParkForm from '../NewParkForm/NewParkForm';
import ParkList from '../ParkList/ParkList';

function Park() {
  return(
    <div>
      <h2>This is the garden!</h2>
      {/* Redux State isn't needed in the garden, it is just a parent component */}
      {/* Thanks to redux, there is no need to pass along props! */}
      <NewParkForm />
      <ParkList />
    </div>
  )
}

export default Park;
