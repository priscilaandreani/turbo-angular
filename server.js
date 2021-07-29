//Install express server
const express = require('express');
const path = require('path');

const app = express();

const appName = 'turbo-angular'
const outputPath = `${__dirname}/dist/${appName}`

// Serve only the static files form the dist directory
app.use(express.static(outputPath));


// Redirect to index.html
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/turbo-angular/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
