import express from "express"
import {setupApp} from "./config/appConfig.js"
import NoticeRoute from "./routes/NoticeRoute.js"
/*기본적인 서버 세팅*/

//익스프레스 앱 생성
const app = express();

//기본설정
setupApp(app); 
//라우트 호출
app.use("/api/notice",NoticeRoute)

//서버 포트 설정
const port = 5000;

//express 포트 처리
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
