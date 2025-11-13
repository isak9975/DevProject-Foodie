# DevProject-Foodie
> 팀 학습용 맛집 탐방 사이트 프로젝트  
> 기술 스택: React + Node.js(Express) + PostgreSQL, 배포: Railway

---

## 프로젝트 개요
DevProject-Foodie는 팀원과 함께 **학습 목적으로 진행하는 첫 풀스택 프로젝트**입니다.  
맛집 정보를 제공하는 사이트를 만들어, 프론트엔드와 백엔드, 데이터베이스 연결 및 배포까지 전체 과정을 경험하는 것이 목표입니다.

---

## 기술 스택
- **Frontend:** React (Vite)  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL (Railway에서 관리)  
- **배포:** Railway (프론트, 백, DB 한 번에 배포)  

---

## 프로젝트 구조
DevProject-Foodie/  
├─ client/ # React 프론트엔드  
├─ server/ # Node.js + Express 백엔드  
│ ├─ controllers/ # 요청 처리 로직  
│ ├─ services/ # 비즈니스 로직 / DB 처리  
│ ├─ models/ # 데이터 구조 객체  
│ ├─ routes/ # 라우팅  
│ └─ app.js # 서버 진입점  
└─ README.md  
  
---

## 개발 목표
1. **React 프론트엔드**: 사용자 인터페이스 구현, API 호출  
2. **Node.js 백엔드**: Express로 API 서버 구성, Service 객체로 비즈니스 로직 관리  
3. **PostgreSQL DB**: 사용자 및 맛집 데이터 관리, Service에서 쿼리 실행  
4. **Railway 배포**: 프론트, 백, DB를 한 번에 배포하고 URL 공유  

---

## 학습 포인트
- Node.js + Express에서 객체지향적 코드 작성 방법 (Model, Service, Controller)  
- 프론트 React와 백엔드 API 연결  
- PostgreSQL과 Node.js 연동  
- Railway를 이용한 풀스택 프로젝트 배포  

---

## 프로젝트 실행 방법 (프론트 + 백엔드 동시에)

1. 루트 디렉토리로 이동
```bash
cd DevProject-Foodie
npm install
npm run dev
```
