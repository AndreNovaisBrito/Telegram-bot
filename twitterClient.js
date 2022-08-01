//Twitter Bot Start
require('dotenv').config();
const {TWITTER_APP_KEY, TWITTER_APP_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET} = process.env; // get the token from the .env file
const {TwitterApi} = require('twitter-api-v2'); // import twitter
const client = new TwitterApi({
    appKey:TWITTER_APP_KEY,
    appSecret:TWITTER_APP_SECRET,
    accessToken:TWITTER_ACCESS_TOKEN,
    accessSecret:TWITTER_ACCESS_SECRET
});
const rwClient = client.readWrite;
module.exports = rwClient;