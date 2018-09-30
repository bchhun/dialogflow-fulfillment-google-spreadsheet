const fs = require('fs');
const {google} = require('googleapis');

function getDataFromSpreadsheet(tabName, startCell, endCell) {
  return new Promise((resolve, reject) => {
    console.log('getDataFromSpreadsheet', typeof content);

    const sheets = google.sheets({version: 'v4', auth: process.env.SPREADSHEET_API_KEY});

    sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${tabName}!${startCell}:${endCell}`,
    }, (err, res) => {
      if (err) reject('The API returned an error: ' + err);

      const rows = res.data.values;

      resolve(rows);
    });
  });
}

exports.getDataFromSpreadsheet = getDataFromSpreadsheet;