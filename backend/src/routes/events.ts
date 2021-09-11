import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// all, upcoming, past?

export default router;
