// Author : Alphy Baby
// Last revised : 06-06-2024

const axios = require('axios');

// Define the server URL
const serverUrl = 'http://localhost:4000/search-artifacts';

// Define test cases with different filter criteria
const testCases = [
  {
    description: 'Filter by artifact_type_name and painter_name',
    filters: { artifact_type_name: ['Calyx-kraters'] }
  },
];

// Run the test cases
testCases.forEach(async (testCase, index) => {
  try {
    const response = await axios.post(serverUrl, testCase.filters);
    console.log(`Test Case ${index + 1}: ${testCase.description}`);
    console.log('Filtered Artifacts:', response.data);
  } catch (error) {
    console.error(`Test Case ${index + 1}: ${testCase.description}`);
    console.error('Error filtering artifacts:', error.response ? error.response.data : error.message);
  }
});
