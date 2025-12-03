import express from "express";

const router = express.Router()

router.post("/signup", (req,res) => {
    res.send("Signup endpoint");
})

router.post("/login", (req,res) => {
    res.send("login endpoint");
})

router.post("/logout", (req,res) => {
    res.send("logout endpoint");
})

export default router;