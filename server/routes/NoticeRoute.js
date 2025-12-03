import express from "express";
import*as noticeController from "../controllers/NoticeController"

const router = express.Router();

//api 주소 연결
router.get("/",noticeController.findAll);
router.post("/",noticeController.create)

export default router;