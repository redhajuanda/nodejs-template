const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    let count = countUpperCaseChars(req.body.message);
    res.send({ message: "success", data: count });
});

function countUpperCaseChars(str) {
    var count = 0, len = str.length;
    for (var i = 0; i < len; i++) {
        if (/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
}

module.exports = router;