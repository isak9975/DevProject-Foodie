import NoticeComponent from "../components/NoticeComponent";

const Notice = () => {
    const notices = [
        {
        id: 1,
        title: "최초 전달사항",
        author: "김이삭",
        createdAt: "2025-11-18",
        content: "<div>혹시나 전달 사항 이나 건의사항 있으시면 적어주세요. </br> 저는 일단 공지사항 게시판 부터 작업하겠습니다.</br> 확실히 오랜만에 하니까 기억하나도 안나네욬ㅋㅋㅋㄴㅋ</br>pages-notice에 적으시면 됩니다.<div> "
    },
];

    return(
        <div>
            <div>Notice Page</div>
            {notices.map(notice => (
                <NoticeComponent notice={notice}/>
            ))}
        </div>
    )
}

export default Notice;