import express from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router()

//모든 message 라우터 요청은 두 미들웨어를 거친다.
router.use(arcjetProtection, protectRoute)

//나를 제외한 유저 정보를 배열로 반환
router.get("/contacts", getAllContacts)

//나와 채팅한 모든 유저의 정보를 배열로 반환
router.get("/chats", getChatPartners)

//나와 특정유저(id)와 나눈 대화를 반환
router.get("/:id", getMessagesByUserId)

//특정유저(id)에게 메세지를 보낸고 보낸 메세지는 db에 저장
router.post("/send/:id", sendMessage)

export default router;