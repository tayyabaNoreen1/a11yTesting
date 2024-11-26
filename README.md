# a11yTesting


Chrome extensions for a11y testing:

1. axe: https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd
2. wave: https://wave.webaim.org/extension/

==

google lighthouse in dev tools can also be used for generating accessibility report

===

To install axe cli after node and npm installation, enter this command in terminal: npm install -g axe-cli

===

To test a page for a11y in headless mode: axe testingwithmarie.com

To run tests in actual browser: axe testingwithmarie.com --browser chrome


To run tests on multiple pages separated by commas: axe testingwithmarie.com; testingwithmarie.com/about --browser chrome

To disbale some of the a11y rules: axe testingwithmarie.com, testingwithmarie.com/about --browser chrome --disable link-name
To save test results in jsn file: axe testingwithmarie.com, testingwithmarie.com/about --browser chrome --save test-results.json


====

To do a11y testing using cypress:


Install cypress: npm i cypress
To open cypress: npx cypress open


cy.injectAxe > To inject the axe-core runtime in test application
cy.checkA11y() > To scan page for accessibility features
===

To setup applitools eyes:

npm i -D @applitools/eyes-cypress

After installation, to setup Applitools with Cypress: 
npx eyes-setup 

npm i dotenv > to load env
require('dotenv').config(); > Add this ti cypress.config.js
set APPLITOOLS_API_KEY=[] > To set api key

contrast advisor for accessibility testing in applitools is a pro feature











