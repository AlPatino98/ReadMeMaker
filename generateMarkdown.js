// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Table of Contents
Description
Usage
Contribution
Test
Questions
Badges
 
## description
   ${data.description}
## Usage
   ${data.usage}
## contributing
   ${data.contributing}
## test
   ${data.test}
## questions
   ${data.questions}
## Badges

![badge]( https://img.shields.io/badge/license-${data.license}-green)
  
`;
}

module.exports = generateMarkdown;
