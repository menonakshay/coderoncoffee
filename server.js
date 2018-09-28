var express = require('express')

var app = express();

const PORT = process.env.PORT || 8080

console.log(process.env.NODE_ENV)

// Production Server
app.use(express.static('www'))

app.listen(PORT, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log(`Production Server :: Listening at http://localhost:${PORT}/`);
})