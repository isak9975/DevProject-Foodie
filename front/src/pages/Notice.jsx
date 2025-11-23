import NoticeComponent from "../components/NoticeComponent";

//간단한 정보를 공유 하기 위한 장소 
const Notice = () => {
    const notices = [
        {
        id: 1,
        title: "최초 전달사항",
        author: "김이삭",
        createdAt: "2025-11-18",
        content: "<div>혹시나 전달 사항 이나 건의사항 있으시면 적어주세요. </br> 저는 일단 공지사항 게시판 부터 작업하겠습니다.</br> 확실히 오랜만에 하니까 기억하나도 안나네욬ㅋㅋㅋㄴㅋ</br>pages-notice에 적으시면 됩니다.<div> "
    },
    {
        id: 2,
        title: "기억이 안나요",
        author: "신태균",
        createdAt: "2025-11-21",
        content: "<div>진짜 어떻게 하는건지 1도 모르겠네요 <br/> props랑 useState를 썼던 거 같은데... <br/> 다시 공부하고 작업해야겠어요<div> "
    },
    {
        id: 3,
        title: "추가한 리액트 패키지들",
        author: "김이삭",
        createdAt: "2025-11-24",
        content: "<div>1. react-router-dom - 페이지 이동을 쉽게 해주는 라이브러리<br/>  2. react-quill-new - 텍스트 에디터<br/>  3. react-icon - 아이콘을 React에서 쉽게 사용 <div> "  
    }
];

    return(
        <div style={styles.Container}> 
            <h1>Notice Page</h1>
            {notices.map(notice => (
                <NoticeComponent key={notice.id} notice={notice}/>
            )).reverse()}
        </div>
    )
}

const styles = {
    Container : {
        gap : '20px',
        height : '100vh',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },

}

export default Notice;