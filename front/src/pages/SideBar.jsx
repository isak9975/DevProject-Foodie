import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaStickyNote } from "react-icons/fa";
import { CgBowl } from "react-icons/cg";

//사이드바 컴포넌트
const SideBar = () => {

    //버튼 아이콘 찾는 사이트
    //https://react-icons.github.io/react-icons/
    const buttons = [
        { id: 1, name: "Main", path: "/", icon: GoHome },
        { id: 2, name: "Notice", path: "/notice", icon: FaStickyNote },
        { id: 3, name: "Restaurant", path: "/restaurant", icon: CgBowl},
    ]

    return (
        <div style={styles.Container}>
            <div className="Top">

            </div>

            <div style={styles.Middle}>
                {/* 버튼 리스트 돌려주며 내용 보여주기 */}
                {buttons.map((button) => {
                    const Icon = button.icon;
                    return (
                        // 각 버튼마다 링크 걸기
                        //<Link to="/경로">내용</Link> 주소로 이동하기 위한 react-router-dom 컴포넌트
                        <Link to={button.path} key={button.id}><Icon size={30} />{button.name}</Link>
                    )
                })}
            </div>

            <div className="SBBottom">

            </div>

        </div>
    )
}

const styles = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        width: '60px',
        // backgroundColor : '#f0f0f0',
        alignItems: 'center',
        padding: '10px',
    },
    Middle:{
        display : 'flex',
        flexDirection : 'column',
        gap : '10px',
    }
}

export default SideBar;