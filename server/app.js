import express from "express"
import {setupApp} from "./config/appConfig.js"

/*기본적인 서버 세팅*/

//익스프레스 앱 생성
const app = express();

//라우트 호출
setupApp(app); 

//서버 포트 설정
const port = 5000;

//루트 경로에 대한 GET 요청 처리
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
