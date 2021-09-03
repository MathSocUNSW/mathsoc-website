import express from 'express';
const router = express.Router();

router.get('/2021', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/2020', (req, res) => {
  res.json({ hello: 'world' });
});

export default router;
