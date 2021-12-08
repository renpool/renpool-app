import { shortAccount } from "./shortAccount"

it('should return empty for null', () => {
    expect(shortAccount()).toBe('');
})

it('should return only dots for empty account', () => {
    expect(shortAccount('')).toBe('...');
})

it('should work with a shorter account length', () => {
    expect(shortAccount('0x12345')).toBe('0x1234...2345');
})

it('should work with an even shorter account length', () => {
    expect(shortAccount('0x1234')).toBe('0x1234...1234');
})
