import axios from 'axios';
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// const galleryItems = require('../modules/gallery.data');

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.

let park = GalleryItem;




function GalleryItem({ item, fetchGalleryItems }) {
  const [playgroundImage, setPlaygroundImage] = useState(true);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch ();


  const removePark = (id) => {
    dispatch({ type: 'REMOVE_PARK', payload: id })
  };

   const renderLight = () => {
      if(toggle === true) {
        return (
          <div onClick={(event) => setToggle(!toggle)}>{item.park_id}</div> 
        )
        } else {
        return (
          <img src={item.photo} />
        )
      }
    }

    return (
      <>
        <h3>{item.id}</h3>
        <button onClick={() => 
          removePark(item.id)}>
          Delete
        </button>
        <button>{renderLight()}</button>
        <br></br>
        <br></br>
        {JSON.stringify(item.description)}
        <br>
        </br>
        
        
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
