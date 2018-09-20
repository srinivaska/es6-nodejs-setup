import express from 'express';
import HelperUtils from '../utils/helperUtils';
const Helperservice = new HelperUtils();
const router = express.Router();

/* This routes Serves application home page */
router.get('/', (req, res) => {
  res.send('Application Running');
});

/* sample end point */
router.get('/getData', async (req, res) => {
  const str = 'sample Endpoint Working';
  let response = Helperservice.reverse(str);
  res.json({
    String: str,
    reverseString: response,
    status: 'success',
    statusCode: 200
  });
});

export default router;
