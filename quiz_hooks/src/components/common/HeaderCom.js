import { Link, Outlet} from "react-router-dom";

const HeaderCom = () => {
    return (
        <div>
            <header>
                <Link to="/">HOME</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link> &nbsp;
                <hr />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default HeaderCom;