const NoticeComponent = ({ notice }) => {

  return (
    //하나의 공지글 컴포넌트
    <div>
        <h3>{notice.id}. {notice.title}</h3>
        <div>{notice.createdAt} / {notice.author}</div>
        <div dangerouslySetInnerHTML={{ __html: notice.content }}></div>
    </div>
    )
}

export default NoticeComponent;