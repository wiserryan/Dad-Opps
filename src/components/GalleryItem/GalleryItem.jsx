import axios from 'axios';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
// const galleryItems = require('../modules/gallery.data');

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.


function GalleryItem({ item, fetchGalleryItems }) {
  const [playgroundImage, setPlaygroundImage] = useState(true);
  const [toggle, setToggle] = useState(false);

   const renderLight = () => {
      if(toggle === true) {
        return (
          <div onClick={() => setToggle(!toggle)}>{item.park_id}</div> 
        )
        } else {
        return (
          <img src={item.photo} />
        )
      }
    }

    return (
      <>
        {JSON.stringify(item)}
        <h3>{item.park_id}</h3>
        <button>{renderLight()}</button>
      </>
      
    )
}    


export default GalleryItem;



// const increaseLikes = (event) => {
//   const action = { type: 'INCREASE_LIKES'};
//   console.log ('you likd the Photo');
//   dispatchEvent(action);
// }


//   const photoLike = (e) => {
//     axios.put(`/gallery/like/${item.id}`, { likes: item.likes + 1}).then(response => {
//         console.log('response:' , response);
//         fetchGalleryItems();
//     }).catch((error) => {
//         console.log(`Error in photoLike, ${error}`);
//         alert('Something failed in photoLike');
//     });
// }
     
// return (
// <div>
// <div onClick={() => setToggle(!toggle)}>{renderLight()}</div>
// <h2>LIKES:{item.likes}</h2>
// <button onClick={(e) => photoLike(e)}>Like</button>
// </div>
// )
// }


// Using hooks we're creating local state for a "heading" variable with
// a default value of 'Functional Component'
//   const store = useSelector((store) => store);
//   const [heading, setHeading] = useState('Functional Component');

//   return (
//     <div>
//       <h2>{heading}</h2>
//     </div>
//   );
// }
