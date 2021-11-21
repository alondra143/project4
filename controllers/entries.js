const Entry = require('../models/entry');

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
};

async function create(req, res) {
    try {
      const entry = await Entry.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user
      });

      res.status(201).json({ entry: entry });
    } catch (err) {
      res.status(400).json({ err });
    }
  }

async function index(req, res) {
  try {
    const entries = await Entry.find({}).populate("user").exec();
    res.status(200).json({ entries: entries });
  } catch (err) {
    res.status(400).json({ err });
  }
}

module.exports = {
    create,
}

function create(req, res) {
    console.log(req.body, req.user, '<-- this is body and user for post request');
}