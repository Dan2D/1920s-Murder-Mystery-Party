import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';

import App from "../../../App";
import Nav from "./Nav";

describe('The Nav Component', () => {
    afterEach(cleanup);

    it('should update style on user click', () => {
        const { getByTestId} = render(<App><Nav/></App>);
        // Initial styling of nav home link should light up
        expect(getByTestId("nav-home").style.opacity).toBe("1");
        fireEvent.click(getByTestId("nav-news"));
        // Checks content is updated and new styling applied to clicked link
        expect(getByTestId("nav-news").style.opacity).toBe("1");
        // checks that old link styling removed
        expect(getByTestId("nav-home").style.opacity).not.toBe("1");
    })
    
    it('should update content on user click', () => {
        const {getByTestId, container} = render(<App><Nav/></App>);
        // Checks unrendered content does not exist in DOM
        expect(container.querySelector(".news-container")).toBeNull();
        // Checks initla content exists in DOM
        expect(container.querySelector(".home-container")).toBeDefined();
        fireEvent.click(getByTestId("nav-news"));
        // Checks new content exists in DOM after Nav Click
        expect(container.querySelector(".news-container")).not.toBeNull();
    })

    describe("The Submenu Component", () => {
        it('should render submenu items', () => {
            const {getByTestId, container} = render(<Nav/>);
            // Checks that the open class is not applied to the subMenu and so is hidden
            expect(container.querySelector(".subMenu-container-open")).toBeFalsy();
            fireEvent.click(getByTestId("nav-guide"));
            // After guide is clicked, check that open class is applied to subMenu
            expect(container.querySelector(".subMenu-container-open")).toBeTruthy();
        })
    })

});