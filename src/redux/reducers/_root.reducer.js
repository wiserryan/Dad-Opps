import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga
const parkList = (state = [], action) => {
  switch (action.type) {
    //add one park to existing array
    // case 'ADD_PARK':
    //   return [ ...state, action.payload ]
   //replace all existing parks
      case 'SET_PARKS':
        return action.payload;
      default:
        return state;
  }
};

//PARKS REDUCER
// Used to store movies returned from the server
const parks = (state = [], action) => {
  switch (action.type) {
      case 'SET_PARKS':
          return action.payload;
      default:
          return state;
  }
}
//selectedPark = parkToDisplay;
const selectedPark = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PARK_DETAILS':
      return action.payload;
    default:
      return state;
  }
}
// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  parkList,  
  parks,
  selectedPark,
});

export default rootReducer;
