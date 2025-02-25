import nextJest from "next/jest.js"; // Manter a correção para .js

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ['<rootDir>/src/setupTests.js'], // Corrigido
};

export default createJestConfig(customJestConfig);
