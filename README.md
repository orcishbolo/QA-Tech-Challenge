Cypress - Fast, easy and reliable testing for anything that runs in a browser


Installation
These tests requires Node.js to run.
Install the dependencies and devDependencies and start the tests.

# install dependencies
$ npm install
# install cypress
$ npx cypress install
# open cypress
$ npx cypress open


Scripts:
# run all test
"cy:run:local:": "npx cypress run --spec \"cypress/e2e/scripts/*.cy.js\"",
# run all test
# will save results in dashboard
"cy:runToDashboard:": "npx cypress run --spec \"cypress/e2e/scripts/*.cy.js\" --record --key 282b9e91-25a3-4755-8ec6-105dcc0738bb"
