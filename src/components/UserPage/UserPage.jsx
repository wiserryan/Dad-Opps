import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import UpdateButton from '../UpdateButton/UpdateButton';
import {useSelector} from 'react-redux';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import { HashRouter as Router, Route } from 'react-router-dom';
import ParkDetail from '../ParkDetail/ParkDetail';



function UserPage() {
   const [listOfItems, setListOfItems] = useState ([]);
  //  this component doesn't do much to start, just renders some user reducer info to the DOM
  //   //!Use axios to retrieve (GET) data from to /gallery and store it in App.jsx.
     const fetchGalleryItems = () => {
       axios.get('/gallery').then((response) => {
         setListOfItems(response.data);
       }).catch((error) => {
         console.log(`Error in get $(error)`);
         alert('Something went wrong');
       })
  }
       useEffect(() => {
         fetchGalleryItems();
       }, []);

  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

<Router>   
  <Route exact path="/detail">
    <GalleryList />
  </Route>
</Router>

      {/* //code comment this back to get the pics// */}

      {/* {listOfItems.map(item => {
        return (
          <GalleryItem
            item={item}
            fetchGalleryItems={fetchGalleryItems}
          />
        )
      })} */}
      
   

<UpdateButton className="btn" />
((((need to utilize formComponent here))))
<br>
</br>
<br>
</br>
<LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;


// {/* <Router>
//         {/* <Route path="/" exact>
//           <GalleryList />
//         </Route> */}
//       </Router>
//       {JSON.stringify(listOfItems)} */}

  //  {/* <GalleryList
  //       listOfItems={listOfItems}
  //       fetchGalleryItems={fetchGalleryItems}
  //       /> */}

// {/* <div> {JSON.stringify(listOfItems)}
//       {/* <img src="/images/boyd_park.png" alt="Image Description" /> */}

//     </div> */}


// import { useState, useEffect } from 'react';
// import './App.css';
