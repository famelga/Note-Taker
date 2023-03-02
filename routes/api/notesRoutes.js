const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../../helpers/fsUtils');

// GET Route for retrieving all the notes
fb.get('/api/notes', (req, res) =>
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, '../db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = fb;
