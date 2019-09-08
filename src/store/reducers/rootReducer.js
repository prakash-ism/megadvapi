import authReducer from './authReducer';
import selectionReducer from './selectionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  selected: selectionReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
