var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var googleSpreadsheet = require('./googleSpreadsheet');
var dialogflow = require('./dialogflow');

app.use(express.static('public'));
app.use(bodyParser.json());

// To give out some informations on the current project
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// the DialogFlow fulfillment endpoint
app.post('/', function(request, response) {
  const dialogflowRequest = request.body;
  // An intent's action serves as a mapping mechanism between your intent and a function living in your app.
  // const action = dialogflowRequest.queryResult.action;
  
  // these 3 variables could come from your intent's parameters !
  const tabName = 'Class Data';
  const startCell = 'A2';
  const endCell = 'E';
  
  return googleSpreadsheet.getDataFromSpreadsheet(tabName, startCell, endCell)
    .then((results) => {
      response.json(
        dialogflow.convertFormat(results)
      );
    }).catch((error) => {
      throw new Error(error);
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
