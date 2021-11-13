// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test isPhoneNumber', () => {
    expect(functions.isPhoneNumber('938-949-2850')).toBe(true);
    expect(functions.isPhoneNumber('533-472-3059')).toBe(true);
    expect(functions.isPhoneNumber('128fnwj')).toBe(false);
    expect(functions.isPhoneNumber('2fnw-0fnfj2')).toBe(false);
});
test('Test isEmail', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
    expect(functions.isEmail('email@net.edu')).toBe(true);
    expect(functions.isEmail('myemail')).toBe(false);
    expect(functions.isEmail('ihavenoemail')).toBe(false);
});
test('Test isStrongPassword', () => {
    expect(functions.isStrongPassword('hEllo2021')).toBe(true);
    expect(functions.isStrongPassword('myBirthday0220')).toBe(true);
    expect(functions.isStrongPassword('2020hello')).toBe(false);
    expect(functions.isStrongPassword('mypassword--')).toBe(false);
});
test('Test isDate', () => {
    expect(functions.isDate('11/13/2021')).toBe(true);
    expect(functions.isDate('7/19/1999')).toBe(true);
    expect(functions.isDate('jun/11/20')).toBe(false);
    expect(functions.isDate('11/13/21')).toBe(false);
});
test('Test isHexColor', () => {
    expect(functions.isHexColor('FF5733')).toBe(true);
    expect(functions.isHexColor('000')).toBe(true);
    expect(functions.isHexColor('1-1-1')).toBe(false);
    expect(functions.isHexColor('01111101')).toBe(false);
});