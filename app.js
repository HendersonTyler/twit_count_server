require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const wordCloud = require("./components/wordCloud.js");
const getTweets = require("./components/getTweets.js");
const sentiment = require("./components/Sentiment.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:user", async (req, res) => {
  try {
    let tweets = await getTweets(req.params.user);
    //   console.log(tweets);
    let wordCloudData = await wordCloud(tweets);
    let sentimentResults = await sentiment(tweets);
    const combinedResults = wordCloudData.concat(sentimentResults);
    res.send(combinedResults);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// process.exit(1);
