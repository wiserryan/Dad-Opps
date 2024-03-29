import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import UpdateButton from '../UpdateButton/UpdateButton';


function ParkDetail () {
    const park = useSelector(store => store.selectedPark);
    const specificPark = useSelector(store => store.specificPark);
    const dispatch = useDispatch();
    const history = useHistory();
    // const { parkId } = useParams();

const toHome = () => {
    history.push('/');
}

    useEffect(() => {
        dispatch({ type: 'FETCH_SPECIFIC_PARK', payload: park });
        // console.log('parkId', parkId);
     }, [])
    return (
        <div>
            <h3>Park Detail</h3>
            <UpdateButton className="btn" />

            <br></br>
            <h3>{specificPark.title}</h3>
            <img src={specificPark.photo} alt={specificPark.title} />
            <p>{specificPark.address}</p>
            {/* {JSON.stringify(specificPark)} */}
        <br>
        </br>
        <br>
        </br>
        <button onClick={toHome}>Back to Home</button>
        </div>
    )
    }

export default ParkDetail;










//     const park = useSelector(store => store.selectedPark)
//     const { parkId } = useParams();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatchEvent({ type: 'FETCH_PARK_DETAILS', payload: parkId });
//     }, [parkId])

// return (
//     <div>
//         <h1>{parkId}</h1>
//         <h3>{park.id</h3>
//         <img src ={park.}
//     </div>
// )

