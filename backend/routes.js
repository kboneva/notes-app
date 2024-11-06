const express = require('express');
const router = express.Router();
const notes = require('./controller');

router.get('/', notes.findAll);
router.get('/:id', notes.findOne);
router.post('/', notes.create);
router.put('/:id', notes.update);
router.delete('/:id', notes.delete);

module.exports = router;