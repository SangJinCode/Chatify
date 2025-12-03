// const express = require('express')
import express from "express";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

const app = express();

const PORT = ENV.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello World!");
})

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT, () => console.log("Server running on port:" + PORT ))

