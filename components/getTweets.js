const Twitter = require("twitter-v2");

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

async function getTweets(userName) {
  try {
    // Get user ID
    let userID = await client.get("users/by", {
      usernames: userName,
      user: {
        fields: ["profile_image_url"],
      },
    });
    // Get user tweets
    let tweets = await client.get(`users/${userID.data[0].id}/tweets`, {
      max_results: "20",
    });
    return {
      tweetList: tweets,
      profileImage: userID.data[0].profile_image_url,
      name: userID.data[0].name,
    };
  } catch (error) {
    console.log(error);
    return "error";
  }
}

module.exports = getTweets;
