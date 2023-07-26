
// MINI ROUTER  
import express from "express";
const router = express.Router();

router.get("/post/:userId/:postId",(req, res, next)=>{

    res.send("This is post" + new Date());
});

router.get("/posts/:userId/",(req, res, next)=>{
    res.send(`This is user posts ${new Date()}`)
});

router.post("/post",(req, res, next)=>{
    res.send(`Post Created ${new Date()}`)
});

router.put("/post/:userId/:postId",(req, res, next)=>{
    res.send("Post Updated" + new Date())
});

router.delete("/post/:uerId/:postId",(req, res, next)=>{
    res.send("Post Deleted" + new Date())
});
