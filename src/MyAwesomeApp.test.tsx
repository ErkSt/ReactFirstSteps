import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {

    test('Should render first and last name', () => {

        const { container } = render(<MyAwesomeApp />);
        console.log(container)

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Erik');
        expect(h3?.innerHTML).toContain('Steg');
    });

    test('Should render first and last name - Screen', () => {
        screen.debug()

        //const h1 = screen.getByTestId("first-name-title");
        //console.log(h1);

        //expect(h1?.innerHTML).toContain('Erik');
    });

    test('Should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    })
});