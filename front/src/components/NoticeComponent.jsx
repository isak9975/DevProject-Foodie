const NoticeComponent = ({ notice }) => {

  return (
    //하나의 공지글 컴포넌트
    <div style={styles.Container}>
        <div style={styles.title}>{notice.id}. {notice.title}</div>
        <div style={styles.author}>{notice.createdAt} / {notice.author}</div>
        <div dangerouslySetInnerHTML={{ __html: notice.content }}></div>
    </div>
    )
}

const styles = {
  Container : {
    border : '1px solid white',
    textAlign : 'left',
    padding : '10px',
    borderRadius : '5px',
    width : '500px',
    backgroundColor : '#333',
    color : 'white',
  },
    title : {
      fontSize : '20px',
      fontWeight : 'bold',
    },
    author : {
      fontSize : '12px',
      color : 'gray',
      marginBottom : '10px',    
  }
}
export default NoticeComponent;