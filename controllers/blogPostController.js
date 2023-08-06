import { Router } from 'express';
const router = Router();
import { BlogPost } from '../models';

router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll({});
        res.render('blogPosts', {blogPosts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByPk(req.params.id, {});
        res.render('blogPostDetail', {blogPost});
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create(req.body);
        res.status(201).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/: id', async (req, res) => {
    try {
        const updatedBlogPost = await BlogPost.update(req.body, {
            where: {id: req.params.id},
        });
        res.status(200).json(updatedBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedBlogPost = await BlogPost.destroy({
            where: {id: req.params.id},
        });
        res.status(204).json(deletedBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router; 