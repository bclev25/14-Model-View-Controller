import { Router } from 'express';
const router = Router();
import { BlogPost } from '../models';

router.get('/', async (req, res) => {
    try {
        const postData = await BlogPost.findAll({});
        res.render('homepage', {postData});
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;