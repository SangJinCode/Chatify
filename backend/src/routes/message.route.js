import express from "express";

const router = express.Router()

app.get("/contacts", (req,res) => {
    res.send("contacts endpoint");
})

app.get("/chats", (req,res) => {
    res.send("chats endpoint");
})

app.get("/:id", (req,res) => {
    res.send("id endpoint");
})

app.get("/send/:id", (req,res) => {
    res.send("send:id endpoint");
})

export default router;