import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';



it('handles SAVE_COMMENT action correctly', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
})

it('handles action with an unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
})