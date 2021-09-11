import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/exam_bank', (req, res) => {
  res.json({
    math1081: [
      { name: 'Lab Test 1', link: 'http://localhost:8080/static/resources/2021/lab_test_1.pdf' }
    ]
  });
});

router.get('revision', (req, res) => {
  res.json({
    math1081: [
      {
        name: 'Revision Sheet',
        link: 'http://localhost:8080/static/resources/general/math1081_revision_sheet.pdf'
      }
    ]
  });
});

// which resources on each page?

export default router;
