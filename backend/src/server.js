// const express = require('express')
import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

//현재 작업 디렉터리(CWD)를 절대 경로로 반환
const __dirname = path.resolve();
console.log("__dirname",__dirname)

const app = express();

const PORT = ENV.PORT || 3000;

// app.get("/", (req,res) => {
//     res.send("Hello World!");
// })

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

//백엔드 한군데에서 프론트와 API 모두 서빙하는 구조에서 SPA의 내부 라우터 경로를 모르기 때문에 어떤 주소가 들어오든 index.html 반환
//React/Vite 빌드한 결과(dist 폴더)를 정적(static)파일로 제공 즉, /dist 안에 있는 js, css, 이미지들이 Express에서 서빙됨
//서버가 파일을 그대로 브라우저에 전달(client)
if (ENV.NODE_ENV === "production") {
    //설정된 주소로 바로 접금가능하게 한다.
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    //res에 index.html을 담아 반환
    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => console.log("Server running on port:" + PORT ))

