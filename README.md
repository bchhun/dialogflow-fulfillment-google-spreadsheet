# Dialogflow's fulfillment linked with a google spreadsheet for data

This is a simple [Express](http://expressjs.com/) app to be used with a [Dialogflow](https://dialogflow.com/)'s agent as a webhook.

## The spreadsheet being used in this demo

[https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit](https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit)

## The `.env` file content

You will need to create an `.env` file with the following content:

* `SPREADSHEET_ID`: your spreadsheet id. it's in the url of your spreadsheet. Make sure it is public.
* `SPREADSHEET_API_KEY`: an API key that has a read-only access to google spreadsheet. Created in your google cloud project under the API section

## The dialogflow agent

It's downloadable here: [http://bit.ly/2xN9g2k](http://bit.ly/2xN9g2k)

The fulfillment url is already configured to hit this webhook :)

Just say `Hi` in the `Try it now` section in the top right section of the Dialogflow's UI.

The webhook will return all the students in the google spreadsheet and return the following text:

![Hi ! Here's every student in my class: Alexandra, Andrew, Anna, Becky, Benjamin, Carl, Carrie, Dorothy, Dylan, Edward, Ellen, Fiona, John, Jonathan, Joseph, Josephine, Karen, Kevin, Lisa, Mary, Maureen, Nick, Olivia, Pamela, Patrick, Robert, Sean, Stacy, Thomas, Will](https://cdn.glitch.com/ec56efbe-dd7d-4b82-8db8-7847a69616ee%2FScreen%20Shot%202018-09-30%20at%203.24.10%20PM.png?1538335489048)

