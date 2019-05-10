import { SAVE_COMMENT } from 'actions/types';
import {saveComment} from 'actions';


describe('saveComment', () => {
    it('has a SAVE_COMMENT type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has a correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    })


});