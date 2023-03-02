const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const fs = require('fs');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for db.json to return saved notes as JSON
// app.get('/api/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );
app.get('/api/notes', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        
        }
      });
    // Sending all notes to the client
    return res.status(200).json(notes);
  });

// POST request to add a note
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
  
    const { title, text} = req.body;
  
    if (title && text ) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedNotes = JSON.parse(data);
  
          parsedNotes.push(newNote);
  
          fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated notes!')
          );
        }
      });
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting review');
    }
  });

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
