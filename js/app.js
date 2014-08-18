// initialize Google Visualizations package.
google.load("visualization", '1', { packages: ['table'] });
google.load("gdata", "2");
google.setOnLoadCallback(getMyFeed);
//var feedUrl = "https://spreadsheets.google.com/feeds/worksheets/1wfXNfC12hEkqyJhqYmvQPJgeuQyTXLQdWTQfMp6aONI/private/basic";

//function setupMyService() {
//    var myService = new google.gdata.spreadsheet.SpreadsheetService('exampleCo-exampleApp-1');
//    return myService;
//}

//function getMyFeed() {
//    myService = setupMyService();

//    myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
//}

//function handleMyFeed(myResultsFeedRoot) {
//    alert("This feed's title is: " + myResultsFeedRoot.feed.getTitle().getText());
//}

//function handleError(e) {
//    alert("There was an error!");
//    alert(e.cause ? e.cause.statusText : e.message);
//}

var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyjThUtpDYpKMS3jhbY92_8OXUrPQaqbbB-1Rh3ksI/exec";
$(document).ready(function () {
    $.getJSON(SCRIPT_URL + "?callback=?",
              { method: "populate_list" },
              function (data) {
                  alert(JSON.stringify(data));
              });
});











function App() {
    /* Loads data from back-end spreadsheet using Google API. */
    this.loadData = function () {
        var applicantUrl = 'https://spreadsheets.google.com/a/gryphonscientific.com/spreadsheet/tq?key=1wfXNfC12hEkqyJhqYmvQPJgeuQyTXLQdWTQfMp6aONI&gid=0';
        var userUrl = 'https://spreadsheets.google.com/a/gryphonscientific.com/spreadsheet/tq?key=1wfXNfC12hEkqyJhqYmvQPJgeuQyTXLQdWTQfMp6aONI&gid=1';

        sendQuery(applicantUrl);
        sendQuery(userUrl);

        function sendQuery(url) {
            var query = new google.visualization.Query(url);
            query.send(handleQueryResponse);
        }

        function handleQueryResponse(response) {
            window.data = formatData(response.getDataTable());
        }
    }
    /* Loads HTML for comments about applicant with indicated unique ID
     number. */
    this.getComments = function (appID) {

    }
}

var app = new App();