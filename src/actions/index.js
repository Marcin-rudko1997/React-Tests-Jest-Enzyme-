import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => async dispatch => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    
    //Extracting names from response
    const comments = response.data.map(comment => comment.name);
    
    dispatch({type: FETCH_COMMENTS, payload: comments});
}
