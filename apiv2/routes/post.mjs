

import express from "express";
const router = express.Router();

// GET  /api/v1/post/:userId/:postId
router.get('/post/:userId/:postId', (req, res, next) => {
   
    res.send("This is post v2" + new Date());
});
    
    
// GET /api/v1/posts/:userId
router.get('/posts/:userId/', (req, res, next) => {
    
    res.send(`This is user posts v2 ${new Date()}`);
});

    
// POST /api/v1/post
router.post('/post', (req, res, next) => {
   
    res.send(`Post Created V2 ${new Date()}`);
});
    
   
// PUT /api/v1/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res, next) => {
   
    res.send("post Udated v2" + new Date());
});
    
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res, next) => {
   
    res.send("Post Deleted V2" + new Date());
});

export default router;










