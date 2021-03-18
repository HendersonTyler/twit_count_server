Twit Gauge is built on Node.js and React. It takes a Twitter handle and uses Twitter's API to return the users ID, description and profile photo. It then hits Twitter's API again for the past 20 tweets.

[Qminer](https://qminer.github.io/) then tallies up how many times words are used, which is then past onto the front-end for [wordcloud](https://react-wordcloud.netlify.app/) to create a visual representation. [Sentiment](https://github.com/thisandagain/sentiment) then calculates a score based on a list of positive or negative words.

[Front-end](https://github.com/HendersonTyler/twit_front)

View [here.](https://twit-gauge.herokuapp.com/)
