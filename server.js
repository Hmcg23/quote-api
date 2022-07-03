const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Listening on port 4001!');
})

app.get('/api/quotes/random', (req, res, next) => {
    res.send({
        quote: getRandomElement(quotes)
    })
})

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person;
    if (person) {
        const personQuotes = quotes.filter(quote => quote.person === person);
        console.log(personQuotes);
        res.send({
            quotes: personQuotes
        })
        
    } else {
        res.send({
            quotes: []
        })
    }
})

