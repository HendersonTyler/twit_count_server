const Twitter = require("twitter-v2");

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

async function getTweets(userName) {
  try {
    // Get user ID
    let userID = await client.get("users/by", { usernames: userName });
    // Get user tweets
    let tweets = await client.get(`users/${userID.data[0].id}/tweets`, {
      max_results: "20",
    });
    return tweets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getTweets;
