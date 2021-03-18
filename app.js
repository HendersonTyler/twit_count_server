require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.static("client/build"));

const wordCloud = require("./components/wordCloud.js");
const getTweets = require("./components/getTweets.js");
const sentiment = require("./components/sentiment.js");

app.get("/user/:user", async (req, res) => {
  try {
    console.log(req.params.user);
    let tweets = await getTweets(req.params.user);
    let wordCloudData = await wordCloud(tweets.tweetList);
    let sentimentResults = await sentiment(tweets.tweetList);
    const combinedResults = {
      cloud: wordCloudData,
      sentiment: sentimentResults,
      profileImage: tweets.profileImage,
      name: tweets.name,
      description: tweets.description,
    };

    res.send(combinedResults);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
