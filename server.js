// import all packages that we need
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const e = require('express');

// store the public folder path inside a variable
let initial_path = path.join(__dirname, 'public');

// create expressJS server
const app = express();
// set public folder path to static path
app.use(express.static(initial_path));
// use app.use(fileupload()) to enable file uploads
app.use(fileUpload());

// make a home route and in response send home.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'home.html'));
});

// run the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

