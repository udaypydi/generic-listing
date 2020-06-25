import React from 'react';
import { render } from 'test-utils';
import  Button from 'uielements/button';

it('should take a snapshot', () => {
    const { asFragment } = render(<Button buttonText="test button" />)
    
    expect(asFragment(<Button buttonText="test button" />)).toMatchSnapshot()
});
