const base = require('./jest.config.base');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    ...base,
    roots: ['<rootDir>'],
    preset: 'ts-jest',
    testEnvironment: 'node',
};