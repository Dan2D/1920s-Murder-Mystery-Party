import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import App from "../../App";
import Suspects from "./Suspects";

describe('The Suspects Component', () => {
    afterEach(cleanup);
    
    it('should open the password modal', () => {
        const {container, getByTestId} = render(<App><Suspects /></App>);
        // Changes content to suspects page
        fireEvent.click(getByTestId("nav-suspects"));
        // Checks to make sure password modal is initially closed
        expect(container.querySelector(".modal-container.open")).toBeFalsy();
        // Clicks on a character profile to simulate opening password modal
        fireEvent.click(container.querySelector('div[data-status="Suspect"] button.character-title'));
        // Checks to see if Password Modal opened
        expect(container.querySelector(".modal-container.open")).toBeTruthy();
    });
    
    it('should open secret info on character when correct password entered', () => {
        const {container, getByTestId} = render(<App><Suspects /></App>);
        // Changes content to suspects page
        fireEvent.click(getByTestId("nav-suspects"));
        // Checks to make sure secret container is not open initially
        expect(container.querySelector('div.secret-container.open')).toBeFalsy();
        // Clicks on a character profile to simulate opening password modal
        // Enters a correct password into modal and submits it
        fireEvent.click(container.querySelector('div[data-status="Suspect"] button.character-title'));
        fireEvent.change(container.querySelector("#password"), {target: {value: "shhh"}});
        fireEvent.click(container.querySelector(".modal-submit"));
        // Checks if character secret info opens
        expect(container.querySelector('div.secret-container.open')).toBeTruthy();
    })
});