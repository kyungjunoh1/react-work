import { useNavigate } from "react-router-dom"

//useNavigate():자바스크립트 코드로 페이지 이동을 하게 해주는 함수
//<Link to="/"> 는 html로 이동, navigate("/")는 js 코드로 이동.
const NotFound = () => {
    const navigate = useNavigate();
    return(<>
        <h2>member/없는경로 페이지는 존재하지 않습니다</h2>
        <button onClick={ () => navigate("/")}>HOME 이동</button>
    </>)
}
export default NotFound;