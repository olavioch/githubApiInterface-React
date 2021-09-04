import {combineReducers} from 'redux';
import userSearch from './reducers/userSearch';
export default combineReducers({
	usersearch: userSearch
});