require('dotenv').config(); // Loads the .env file
const express = require('express'); // import express
const bodyParser = require('body-parser'); // for parsing the body of the request
const axios = require('axios'); // import axios
const {TOKEN, SERVER_URL} = process.env; // get the token and server url from the .env file
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`; // the url of the telegram api
const URI = `/webhook/${TOKEN}`; // the url of the webhook
const WEBHOOK_URL = SERVER_URL + URI; // the url of the webhook
const app = express(); // create the express app
app.use(bodyParser.json()); // parse the body of the request

const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`); // set the webhook
    console.log(res.data); // log the response
}
app.listen(process.env.PORT || 5000, async () => {
    console.log('App in running on port', process.env.PORT || 5000); // log the port
    await init(); // init the app
});

app.post(URI, async (req, res) => {
    console.log(req.body)

    const chatId = req.body.message.chat.id; // get the chat id
    const text = req.body.message.text; // get the text

    await axios.post(`${TELEGRAM_API}/sendMessage`, { // send the message
        chat_id: chatId, 
        text: 'stop sending me \"' + text + '\" 🙄'
    });
    return res.send(); // send the response
})

