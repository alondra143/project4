const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/entries');

router.post('/', entriesCtrl.create);
router.get('/', entriesCtrl.index)




module.exports = router;