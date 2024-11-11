module.exports = {
  // Glob pattern for finding test files
  testMatch: [
    '<rootDir>/src/**/*.test.ts',       // test files inside src folder
  ],
  
  preset: 'react-native',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};
