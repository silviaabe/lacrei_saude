const nextJest = require("next/jest"); // Usando require aqui

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ['<rootDir>/src/setupTests.js'],
};

module.exports = createJestConfig(customJestConfig); // Exporte usando module.exports
