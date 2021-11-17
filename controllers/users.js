const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); //initializing constructor

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  console.log(req.body, '<-- this is req.body', req.file, '<--this is req.file multer')

  const fileName = `${uuidv4()}/${req.file.originalname}`;
  // aws options object
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
    Body: req.file.buffer, // where the actual image lives in req.file
  };
  s3.upload(params, async function (err, data) {
    console.log(err, 'check keys and aws bucket')
    const user = new User({ ...req.body, photoUrl: data.Location })

    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      console.log(err, 'this is from signup user controller')
      res.status(400).json({ err });
    }
  });
}

async function login(req, res) {

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}
