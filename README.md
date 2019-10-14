# Gambling Commission Azure Template

This template is configured to run as an Azure app instance.

To run:

`npm install`

then

`npm start`

You'll need to add the following to the .env file and set some values.

`templateid=` Template ID for the feedback email for Notify
`NotifyKey=` API Key for Notify feedback 
`recipient=` Email to send the feedback to
`APPINSIGHTS_INSTRUMENTATIONKEY=` Azure Insights Instrumentation key from the App service instance