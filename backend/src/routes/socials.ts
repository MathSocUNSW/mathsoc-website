import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    facebook: 'https://facebook.com/unswmathsoc'
  });
});

export default router;
