const express = require('express');
const pollController = require('../controllers/pollController');

const router = express.Router();

router.post('/', pollController.createPoll);
router.get('/', pollController.getAllPolls);

module.exports = router;
