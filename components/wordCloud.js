const wordCloud = (data) => {
  var qm = require("qminer");
  // create the base object with the desired schema
  var base = new qm.Base({
    mode: "createClean",
    schema: [{ name: "tweets", fields: [{ name: "text", type: "string" }] }],
  });

  // push the data
  let tweetStore = base.store("tweets");
  data.data.map((x) => tweetStore.push({ text: x.text }));

  // get the distribution of keywords
  let distribution = tweetStore.allRecords.aggr({
    name: "test",
    type: "keywords",
    field: "text",
  });

  wordCloudResult = [];
  // output the sorted keyword-weight pairs
  distribution.keywords.forEach((obj) => {
    wordCloudResult.push({ text: obj.keyword, value: obj.weight });
  });

  return wordCloudResult;
};

module.exports = wordCloud;
