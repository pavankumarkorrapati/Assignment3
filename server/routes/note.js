const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (_req, res) => {
    try {
      console.log("hi");
      const notes = Note.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })



  .post('/login', async (req, res) => {
    try {
      let note = Note.login(req.body);
      res.send({...note})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router