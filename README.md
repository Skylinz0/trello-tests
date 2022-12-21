# Instructions

Before starting testing create your workspace and then add new board in Trello.

## Create Trello Power Up
1. Go to this page https://trello.com/power-ups/admin
2. Click on "New"
3. Enter any name to "New Power-Up or Integration" field
4. Select your workspace
5. Click on "Create"

Go back to https://trello.com/power-ups/admin, if not redirected automatically.

## Generate API key
Click on just created Power Up name on previously opened page.

1. Select "API key" in the left tabs
2. Select to "Generate new key"
3. Copy Key from this page to `cypress.config.js` file into `apiKey` variable
4. Once key is generated find this text: "Most developers will need to ask each user to authorize  your application. If you are looking to build an application for yourself, or are doing local testing, you can manually generate a Token."
5. Click on "Token" in this sentence
6. You will be redirected to new page tab, click on "Allow" on this page
7. Copy Token generated on this page to `cypress.config.js` file into `apiToken` variable

You are ready to start testing!