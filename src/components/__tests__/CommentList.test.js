import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;


beforeEach(() => {
    const initialState = {
       comments: ['Comment1', 'Comment2']   
    }

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates one LI element per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
    expect(wrapper.render().text()).toContain('Comment1');
    expect(wrapper.render().text()).toContain('Comment2');
})