import {combineReducers} from 'redux';
import CommentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';


export default combineReducers({
    comments: CommentsReducer,
    auth: authReducer
})