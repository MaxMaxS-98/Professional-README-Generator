// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      '* [License](#license)'
    );
  }
  return '';


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License
      This project is licensed under the ${license} license.`
    );
  }
  return '';
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}

   ## description

   ${data.desription}

   ## table of contents

  * [installation](#installation)
   ${renderLicenseLink(data.license)}
  *[Usage](#usage)
  * [Contributing](#contributing)
  *[Tests](#tests)
  * [Questions] (#questions)
    
  ## Installation

  To install dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ##Contributing 

  ${data.contributing}

  ## Tests 

  To run tests run the following command

  \`\`\` .tests


  `;


}


// renderLicenseSection(license);
// renderLicenseLink(license);
// renderLicenseBadge(license);
// module.exports = generateMarkdown;



