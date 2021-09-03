import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// low priority: user authentication (firebase?)

export default router;
