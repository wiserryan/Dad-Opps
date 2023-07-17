import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchParks() {
    // GET all parks from the DB
    try {
        const response = yield axios.get('/api/park');
        const action = { type: 'SET_PARKS', payload: response.data };
        yield put(action);
    } catch (error) {
        console.log(`ERROR in fetchParks: ${error}`);
    }
        
  }

  // function* fetchSpecificPark() {
  //   // GET all parks from the DB
  //   try {
  //       const response = yield axios.get('/api/park/details/:id');
  //       const action = { type: 'FETCH_SPECIFIC_PARK', payload: req.param.id };
  //       yield put(action);
  //   } catch (error) {
  //       console.log(`ERROR in fetchSpecificPark: ${error}`);
  //   }
        
  // }
  function* fetchSpecificPark(action) {
    try {
        const sPark = yield axios.get(`/api/park/${action.payload}`)
        yield put({ type: 'GET_SPECIFIC_PARK', payload: sPark.data });
        // fetch genres after fetch moviedetails
    } catch (e) {
        console.log(e);
    }
}

  function* removePark(action) {
    console.log('HERE!!');
    try {
      yield axios.delete(`/api/park/${action.payload}`);
      yield put({ type: 'FETCH_PARKS' });
    } catch (error) {
      alert('Something went wrong');
      console.log(`ERROR in removePlant ${error}`);
      throw error;
    }
  }

  function* addPark(action) {
    console.log('HERE!!');
    try {
      yield axios.post(`/api/park`, action.payload);
      //!refresh list of parks after adding a new one//!;

      yield put({ type: 'FETCH_PARKS' });
    } catch (error) {
      alert('Something went wrong');
      console.log(`ERROR in removePark ${error}`);
      throw error;
    }
  }

  function* editPark(action) {
    console.log('edit functionality to follow');//!not showing on CONSOLE//!
    try {
      yield axios.put(`/api/park`, action.payload);
      yield put({ type: 'FETCH_PARKS' });
    } catch (error) {
      alert('Something went wrong');
      console.log('Park entry edit request failed in saga', error);
    }
  }


function* parkSaga() {
    yield takeLatest('FETCH_PARKS', fetchParks);
    yield takeLatest('REMOVE_PARK', removePark);
    yield takeLatest('ADD_PARK', addPark);
    yield takeLatest('EDIT_PARKS', editPark);
    yield takeLatest('FETCH_SPECIFIC_PARK', fetchSpecificPark);

}

export default parkSaga;
