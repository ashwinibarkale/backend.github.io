const Poll = require('../models/Poll');

exports.createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = new Poll({ question, options });
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the poll.' });
  }
};

exports.getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch polls.' });
  }
};
