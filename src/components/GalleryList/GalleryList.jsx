// import React, { useEffect } from 'react';
// import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function GalleryList () {

    const dispatch = useDispatch();
    const history = useHistory();
    const parks = useSelector(store => store.parks);

    const removePark = (id) =>
       dispatchEvent({ type: 'REMOVE_PARK', payload: id });
  

    useEffect(() => {
        dispatch({ type: 'FETCH_PARKS' });
    }, []);

const displayPark = (parkToDisplay) => {
    console.log(parkToDisplay);
    //dispatch is how we get data in to redux and into sagas
    dispatch({ type: 'SET_PARK_DETAILS', payload: parkToDisplay });
    history.push('/detail');
}

    return (
        <main>
            <h1>GalleryList</h1>
            <section className="parks">
                {/* Parks is an array */}
                {parks.map(park => {
                    // for each park in the array display it on the DOM
                    return (
                        <div key={park.id} >
                            <button onClick={() => removePark(park.id)}>
                                Delete</button>
                            <h3>{park.description}</h3>
                            <img onClick={() => displayPark(park)} src={park.photo} alt={park.description}/>
                            <br></br>
                            <button onClick="deletePark(${park.id})">Delete</button>
                        </div>
                    )
                })}
            </section>
        </main>
    );

}

function deletePark(index) {
    console.log(`Deleting quote ${index}`);
    axios.delete(`/gallery/${index}`).then((response) => {
        console.log(response);
        displayPark();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    });
}

    
export default GalleryList;

// put this back at top to work

// { item, fetchGalleryItems }) {
//     const [listOfItems, setListofItems] = useState([]);    
        
//     const fetchGalleryList = () => {
// //GET request
//     axios.get('/gallery').then((response) => {
// //update array
//     setListofItems(response.data);
//     }).catch((error) => {
//     console.log(`error in GalleryList: ${error}`)
//     alert('Something went wrong with GalleryList');
//            })    
//        }
// //keep outside function
//     useEffect(() => {
//     fetchGalleryList();
//     }, []);

//     return (
//         <div className="GalleryList">
            
//             {listOfItems.map((item) => (
//                 <GalleryItem 
//                     key={item.id} 
//                     item={item}
//                     fetchGalleryItems={fetchGalleryItems} />
//             )
//         )
//     }
//                     </div>
//     );                
//     }







//import galleryItems from "/Users/ryanwiser/Tanzanite/Dad-Opps/server/routes/gallery.data.js";
//import '../GalleryList.css';

// function GalleryList () {
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const parks = useSelector(store => store.parks);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_PARKS' });
    // }, []);

    // const displayPark = (parkToDisplay) => {
    //     console.log(parkToDisplay);
    //     history.push(`/detail/${parkToDisplay.id}`);
    // }

//     return (
//         <main>
//             <h1>GalleryList</h1>
//             <section className="parks">
//                 {/* {parks.map(park => { */}
//                     return (
//                         <div key={GalleryList.id} >
//                             <h3>{GalleryList.address}</h3>
//                             <img src={GalleryList.photo} alt={GalleryList.description}/>
//                         </div>
//                     );
               
//             </section>
//         </main>
//     );

// }



// 
      
      

             
    
  