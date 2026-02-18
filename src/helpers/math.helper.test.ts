import { describe, expect, test } from 'vitest';
import { add, divide, multiply, substract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {
        //! Arrenge
        const a = 1;
        const b = 2;

        //! Act
        const result = add(a, b);

        //! Assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        //! Arrenge
        const a = -1;
        const b = -2;

        //! Act
        const result = add(a, b);

        //! Assert
        expect(result).toBe(a + b);
    });
});

describe('substract', () => {
    test('should substract two positive numbers', () => {
        //! Arrenge
        const a = 10;
        const b = 2;

        //! Act
        const result = substract(a, b);

        //! Assert
        expect(result).toBe(a - b);
    });

    test('should substract two negative numbers', () => {
        //! Arrenge
        const a = -10;
        const b = -20;

        //! Act
        const result = substract(a, b);

        //! Assert
        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        //! Arrenge
        const a = 10;
        const b = 2;

        //! Act
        const result = multiply(a, b);

        //! Assert
        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers', () => {
        //! Arrenge
        const a = -10;
        const b = -20;

        //! Act
        const result = multiply(a, b);

        //! Assert
        expect(result).toBe(a * b);
    });

    test('should divide two negative numbers', () => {
        //! Arrenge
        const a = -10;
        const b = -20;

        //! Act
        const result = divide(a, b);

        //! Assert
        expect(result).toBe(a / b);
    });
});