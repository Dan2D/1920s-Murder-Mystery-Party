import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import Modal from "./Modal";

describe('The Modal Component', () => {
    afterEach(cleanup);
    it('should call onClick function on enter key press', () => {
        let handleInput = jest.fn();
        const {container} = render(<Modal onClick={handleInput}/>);
        let modalInput = container.querySelector("#password");
        // Simulates pressing enter key in modal input
        fireEvent.keyDown(modalInput, { key: 'Enter', keyCode: 13, charCode: 13 });
        // Checks that the onClick function was called when enter key was pressed
        expect(handleInput).toBeCalled();
    });

    it('should call onClose func on escape key press', () => {
        let handleInput = jest.fn();
        const {container} = render(<Modal onClose={handleInput}/>);
        let modalInput = container.querySelector("#password");
        // Simulates pressing escape key in modal input
        fireEvent.keyDown(modalInput, { key: 'Escape', keyCode: 27, charCode: 27 });
        // Checlks that the onClose function was called when escape key was pressed
        expect(handleInput).toBeCalled();
    });
});