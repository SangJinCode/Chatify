import express from "express";

const router = express.Router()

router.get("/contacts", (req,res) => {
    res.send("contacts endpoint");
})

router.get("/chats", (req,res) => {
    res.send("chats endpoint");
})

router.get("/:id", (req,res) => {
    res.send("id endpoint");
})

router.get("/send/:id", (req,res) => {
    res.send("send:id endpoint");
})

export default router;