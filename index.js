const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({
    limit: '100mb'
}));
const port = 3003;

app.post('/sendGreeting', (req, res) => {
    let day = new Date(req.body.dob).toLocaleString('en-us', {
        weekday: 'long'
    });
    res.status(200).send({
        message: 'Hi ' + req.body.name + ", you were born on a " + day
    });
});

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});
