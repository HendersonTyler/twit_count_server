var Sentiment = require("sentiment");

function sentiment(tweetFeed) {
  let tweetString = "";

  tweetFeed.data.map((x) => (tweetString = tweetString + x.text + " "));

  var sentiment = new Sentiment();
  var result = sentiment.analyze(tweetString);
  return result;
}
module.exports = sentiment;
