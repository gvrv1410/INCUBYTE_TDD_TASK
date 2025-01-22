import { add } from './StringCalculator';

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should handle any amount of numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
        expect(add("1\n2\n3\n4\n5")).toBe(15);
        expect(add("1,2\n3,4\n5")).toBe(15);
        expect(add("//;\n1;2;3;4;5")).toBe(15);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2, -3");
    });

    test('should throw an error for invalid numbers', () => {
        expect(() => add("1 ,a,3")).toThrow("Invalid number: a");
    });
});