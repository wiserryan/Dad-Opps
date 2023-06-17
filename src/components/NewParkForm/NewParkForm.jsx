import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

const NewParkForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPark, setPark] = useState({id: 4, title: ''});

    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPark({...newPark, title: event.target.value})
    }

    const addNewPark = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PARK', payload: newPark });
        //updates the next plant to have a new id
        setPark({id:newPark.id + 1, title: ''});
    }
    return (
        <div>
            {/* <h3>Add New Park</h3> */}
            <form onSubmit={addNewPark}>
                <input type='text' value={newPark.title} onChange={handleNameChange} />
                <input type='submit' value='Add New Park' />
                <pre>{JSON.stringify(newPark)}</pre>

            </form>
        </div>
    );
}


export default NewParkForm;
