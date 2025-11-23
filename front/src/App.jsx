import Main from './pages/Main'
import './App.css'
import SideBar from './pages/SideBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notice from './pages/Notice'

//라우터 설정 - 페이지 이동을 도와주는 컴포넌트
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* 사이드바 고정 */}
        <SideBar />
        <div style={{ flex: 1, padding: '20px' }}> {/* 페이지가 차지할 공간 */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}
export default App
