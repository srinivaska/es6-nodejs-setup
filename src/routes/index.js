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
    const response = Helperservice.reverse();
    res.json({
        reverseString: response,
        status: 'success',
        statusCode: 200,
    });
});

export default router;
