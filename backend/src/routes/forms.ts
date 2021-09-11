import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// connect to DB

export default router;
