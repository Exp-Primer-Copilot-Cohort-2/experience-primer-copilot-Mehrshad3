// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the comments form
// 5. Create a route for submitting a comment
// 6. Create a route for deleting a comment
// 7. Create a route for editing a comment
// 8. Create a route for saving an edited comment
// 9. Start the web server

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 2. Create a route for the home page
app.get('/', (req, res) => {
    res.send('Home Page');
});

// 3. Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('Comments Page');
});

// 4. Create a route for the comments form
app.get('/comments/new', (req, res) => {
    res.send('Comments Form');
});

// 5. Create a route for submitting a comment
app.post('/comments', (req, res) => {
    res.send('Submit Comment');
});

// 6. Create a route for deleting a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Delete Comment');
});

// 7. Create a route for editing a comment
app.get('/comments/:id/edit', (req, res) => {
    res.send('Edit Comment Form');
});

// 8. Create a route for saving an edited comment
app.put('/comments/:id', (req, res) => {
    res.send('Save Edited Comment');
});

// 9. Start the web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 10. Test the app by visiting the following URLs:
// - http://localhost:3000/
// - http://localhost:3000/comments
// - http://localhost:3000/comments/new
// - http://localhost:3000/comments/1/edit
// - http://localhost:3000/comments/1
// - http://localhost:3000/comments/1 (with DELETE method)
// - http://localhost:3000/comments/1 (with PUT method)