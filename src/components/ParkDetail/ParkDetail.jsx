import { useDispatch, useSelector } from 'react-redux';
// import { useParams} from 'react-router-dom';
// import { useEffect } from 'react';

function ParkDetail () {
    const park = useSelector(store => store.selectedPark);
    return (
        <div>
            <h3>Park Detail</h3>
            <h3>{park.photo}</h3>
            <img src={park.description} alt={park.photo} />
            <p>{park.address}</p>
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

