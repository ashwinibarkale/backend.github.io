const express = require('express');
const voteController = require('../controllers/voteController');

const router = express.Router();

router.post('/:pollId', voteController.vote);

module.exports = router;
