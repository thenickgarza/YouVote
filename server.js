const express = require('express');
const { rsort } = require('semver');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test get route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end()
})

// function to start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});