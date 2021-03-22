import { validateEmail } from "../functions/validation_Functions"

test('Email Validations Test 1', () => {
    expect(validateEmail('Email@gmail.com')).toBe(true);
})

test('Email Validations Test 2', () => {
    expect(validateEmail('Email@gmail@com')).toBe(false);
})

test('Email Validations Test 3', () => {
    expect(validateEmail('')).toBe(false);
})

test('Email Validations Test 4', () => {
    expect(validateEmail(' ')).toBe(false);
})

test('Email Validations Test 5', () => {
    expect(validateEmail('Emailgmailcom')).toBe(false);
})