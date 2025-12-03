import express from "express";

const router = express.Router()

app.post("/signup", (req,res) => {
    res.send("Signup endpoint");
})

app.post("/login", (req,res) => {
    res.send("login endpoint");
})

app.post("/logout", (req,res) => {
    res.send("logout endpoint");
})

export default router;