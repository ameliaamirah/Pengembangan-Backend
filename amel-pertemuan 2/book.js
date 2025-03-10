const express = require('express');
const router = express.Router();

//routing
router.get('/',(req, res) => {
    res.send(`Get data user`);
});

router.get('/:id',(req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;