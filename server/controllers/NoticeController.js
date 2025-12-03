import*as noticeService from "../services/NoticeService"

export const findAll = (req,res) =>{
    //서비스로 전달
    const list = noticeService.findAll();
    //화면으로 전달할 반환
    res.json(list);
}

export const create = (req,res) => {
    //매개변수 전달받기
    const noticeDto= req.body;
    //서비스로 전달
    const result = noticeService.create(noticeDto);
    //화면으로 전달할 반환
    res.json(result);
}