import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = mount(
    <Root>
        <CommentBox />
    </Root>
    );
})

afterEach(() => {
    wrapper.unmount();
})

it('has a textarea and two buttons', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
})

describe('the text area', () => { 

    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        wrapper.update();
    })
    it('has a textarea that user can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    })

    it('after submitting the form, textarea gets cleaned', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    })
});