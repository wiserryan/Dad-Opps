import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import galleryItems from "/Users/ryanwiser/Tanzanite/Dad-Opps/server/routes/gallery.data.js";
//import '../GalleryList.css';

function GalleryList () {
    const dispatch = useDispatch();
    const history = useHistory();
    const parks = useSelector(store => store.parks);

    useEffect(() => {
        dispatch({ type: 'FETCH_PARKS' });
    }, []);

    const displayPark = (parkToDisplay) => {
        console.log(parkToDisplay);
        history.push(`/detail/${parkToDisplay.id}`);
    }

    return (
        <main>
            <h1>GalleryList</h1>
            <section className="parks">
                {/* {parks.map(park => { */}
                    return (
                        <div key={GalleryList.id} >
                            <h3>{GalleryList.address}</h3>
                            <img src={GalleryList.photo} alt={GalleryList.description}/>
                        </div>
                    );
                })}
            </section>
        </main>
    );

}

export default GalleryList;

// function GalleryList ({ item, fetchGalleryItems }) {
//     const [listOfItems, setListofItems] = useState([]);    
    
//     const fetchGalleryList = () => {
//   //GET request
//    axios.get('/gallery').then((response) => {
//    //update array
//            setListofItems(response.data);
//        }).catch((error) => {
//            console.log(`error in GalleryList: ${error}`)
//            alert('Something went wrong with GalleryList');
//        })    
//    }
//    //keep outside function
//    useEffect(() => {
//        fetchGalleryList();
//    }, []);
      
      
//       return (
//           <div className="GalleryList">
//               {listOfItems.map((item) => (
//                   <GalleryItem 
//                       key={item.id} 
//                       item={item}
//                       fetchGalleryItems={fetchGalleryItems} />
//               )
//           )
//       }
//                       </div>
//       );                
//   }
             
    
  