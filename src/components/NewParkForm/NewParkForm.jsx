import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NewParkForm = () => {
    const dispatch = useDispatch();
    const newParkEntries = useSelector((store) => store.park)

useEffect(() => {
    dispatch({ type: "FETCH_PARK" });
}, [dispatch]);
    
    //Initial state is an OBJECT, with keys id and name
    let [newPark, setPark] = useState({ title: 'a', description: 'b', address: 'c', photo: 'd', title: 'e' });

    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPark({...newPark, title: event.target.value})
    }

    const addNewPark = event => {
        event.preventDefault();
        console.log(12345);
        dispatch({ type: 'ADD_PARK', payload: newPark });
        //updates the next plant to have a new id
        setPark({ title: '', description: ''});
    }
    return (
        <div>
            <h3>Add New Park</h3>

            <form onSubmit={addNewPark}>
                
                <input type='text' value={newPark.title} onChange={handleNameChange} />
                <input type='submit' value='Add New Park' />
                <br></br>
                <input type='text' value={newPark.description} onChange={handleNameChange} />
                <input type='submit' value='Description'/>
                <pre>{JSON.stringify(newPark)}</pre>

            </form>
        </div>
    );
}


export default NewParkForm;
