import { useState } from "react";
import ReactQuill from 'react-quill-new';
import "react-quill-new/dist/quill.snow.css";
import NoticeComponent from "../components/NoticeComponent";

//간단한 정보를 공유 하기 위한 장소 
const Notice = () => {
    const now = new Date();
    //편집모드 상태
    const [edit, setEdit] = useState(false);
    //백엔드 통신 데이터 객체
    const [formData,setFormData] = useState({
        id:"",
        author:"",
        title:"",
        createdAt:"",
        content:"",
    });

    //임시 데이터
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

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <div style={styles.title}>Notice Page</div>
                <button onClick={() => { setEdit(!edit) }}>작성하기</button>
            </div>
            {/* 보기모드 */}
            {!edit && <div style={styles.body}>
                {notices.map(notice => (
                    <NoticeComponent key={notice.id} notice={notice} />
                )).reverse()}
            </div>}
            {/* 작성모드 */}
            {edit && <div style={styles.body}>
                <div>아직 미구현</div>
                <div style={styles.titleContainer}>
                    <div>글 작성하기</div>
                    <button
                        onClick={()=>{}}
                    >완료</button>
                </div>
                <div>
                    <label>제목 </label>
                    <input value={formData.title}
                        onChange={e=>setFormData(prev=>({...prev,title:e.target.value}))}
                    />
                </div>
                <div>
                    <label>작성자 </label>
                    <input value={formData.author}
                        onChange={e=>setFormData(prev=>({...prev,author:e.target.value}))}
                    />
                </div>
                <div>
                    <label>작성일 </label>
                    <span>{now.toISOString().split("T")[0]}</span>

                </div>

                <ReactQuill
                    style={{ width: '250px', height: '100px' }}
                    modules={{ toolbar: false }} 
                    value={formData.content}
                    onChange={e=>setFormData(prev=>({...prev,content:e.target.value}))}
                />
            </div>}
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '500px'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '50px',
        gap: "40px",
    },
    title: {
        fontSize: '32px',
        fontWeight: "700",
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    editTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

}

export default Notice;