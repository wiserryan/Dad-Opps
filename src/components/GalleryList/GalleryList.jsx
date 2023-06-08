import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';
import { useState, useEffect } from 'react';
//import '../GalleryList.css';

function GalleryList ({ item, fetchGalleryItems }) {
  const [listOfItems, setListofItems] = useState([]);    
  
  const fetchGalleryList = () => {
//GET request
 axios.get('/gallery').then((response) => {
 //update array
         setListofItems(response.data);
     }).catch((error) => {
         console.log(`error in GalleryList: ${error}`)
         alert('Something went wrong with GalleryList');
     })    
 }
 //keep outside function
 useEffect(() => {
     fetchGalleryList();
 }, []);
    
    
    return (
        <div className="GalleryList">
            {listOfItems.map((item) => (
                <GalleryItem 
                    key={item.id} 
                    item={item}
                    fetchGalleryItems={fetchGalleryItems} />
            )
        )
    }
                    </div>
    );                
}
           
  


export default GalleryList;