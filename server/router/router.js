const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const newFeedback = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  const queryArray = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  ];
  pool
    .query(queryText, queryArray)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
