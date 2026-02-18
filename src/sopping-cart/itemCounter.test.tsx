import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {

        const name = 'Test item'
        render(<ItemCounter gameName={name} />);

        //screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {

        const name = 'Test item2'
        const quantity = 10;
        render(<ItemCounter gameName={name} quantity={quantity} />);

        //screen.debug();
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter gameName='test item 3' quantity={1} />);

        const [_, buttonAd] = screen.getAllByRole('button');
        //console.log(buttonAd.innerHTML);

        fireEvent.click(buttonAd);

        expect(screen.getByText(2)).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {

        const quantity = 5;
        render(<ItemCounter gameName='test item 4' quantity={quantity} />);
        const [buttonSub, _] = screen.getAllByRole('button');

        //screen.debug();
        fireEvent.click(buttonSub);

        expect(screen.getByText(4)).toBeDefined();
    });

    test('should count stay in 1 when -1 button is pressed and quanitity is 0', () => {

        const quantity = 0;
        render(<ItemCounter gameName='test item 5' quantity={quantity} />);
        const [buttonSub, _] = screen.getAllByRole('button');

        //screen.debug();
        fireEvent.click(buttonSub);

        expect(screen.getByText(0)).toBeDefined();
    });

    test('should change to red when quantity is 1', () => {
        const quantity = 1;
        const name = 'test item 6'
        render(<ItemCounter gameName={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when quantity is greater than 1', () => {
        const quantity = 2;
        const name = 'test item 6'
        render(<ItemCounter gameName={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});