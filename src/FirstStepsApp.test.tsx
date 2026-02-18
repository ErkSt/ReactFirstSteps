import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
//import { ItemCounter } from "./sopping-cart/ItemCounter";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid='ItemCounter' />;
})

vi.mock('./sopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

//vi.mock('./sopping-cart/ItemCounter', () => ({
//    ItemCounter: (props: unknown) => (
//        <div
//            name={props.name}
//            quantity={props.quantity}
//            data-testid='ItemCounter'
//            
//        />
//    ),
//}));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render correct number of ItemCounter', () => {
        render(<FirstStepsApp />);

        const ItemCounters = screen.getAllByTestId('ItemCounter');
        expect(ItemCounters.length).toBe(5);
        //screen.debug()
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(5);
    })
});