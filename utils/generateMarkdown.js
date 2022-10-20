
function renderLicenseBadge(license) { 
  if (license==="MIT") {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }  
  else if(license==="IBM"){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }
  else if (license==="APACHE 2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
else if (license==="None") {
    return 'None'
  }
}

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
${data.installation}
  
  ## Usage
  
${data.usage}
  
  
  ## Credits
  
${data.contributors}
  
  ## License

  ${renderLicenseBadge(data.license)}
  

  
  ## Tests

  ${data.test}

`;
}

module.exports = generateMarkdown;
