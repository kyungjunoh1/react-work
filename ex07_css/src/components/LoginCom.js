import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyleInput from "./common/Styleput";
import StyleForm from "./common/StyleForm";
import StyleButton from "./common/StyleButton";
import {useDispatch, useSelector} from "react-redux";
import { setInput } from "../redux/inputSlice";
import { useEffect } from "react";
import { loginThunk } from "../service/authThunk";

const AuthBlock = styled.div`
position: absolute;
left: 0; top: 0; bottom: 0; right: 0;
background-color: rgba(0, 0, 0, 0.1);
`;
const LoginBox = styled.div`
position: absolute;
width: 360px; min-height: 200px;
top: 150px; left: calc(50% - 180px);
background-color: white;
padding-top: 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
border-radius: 5px;
.logo-area {
    text-align: center;
    font-weight: bold;
    letter-spacing: 5px; font-size: 20px;
    border-bottom: 1px dotted olive;
    padding-bottom: 5px;
    width: 50%; margin: 0 auto;
    a{ color: darkcyan; &:hover {color: cyan;}}
    }
`;
const LoginCom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, password } = useSelector(state => state.input);
    const { isLoggedIn } = useSelector(state => state.auth);

    const handleChange = (e) => {
        dispatch(setInput({ name : e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Redux에 저장된 값 : ", {username, password});
        dispatch(loginThunk({username, password}));
    }
    useEffect(() => {
        if(!isLoggedIn) return;
        navigate("/");
    }, [isLoggedIn] );

    return (
    <AuthBlock>
        <LoginBox>
            <div className="logo-area">
                <Link to="/">탱이냥 이동</Link>
            </div>
            <StyleForm onSubmit={handleSubmit}>
                <StyleInput
                name="username"
                value={username}
                onChange={handleChange} 
                placeholder="input username"/>
                <StyleInput
                name="password"
                type="password"
                value={password}
                onChange={handleChange} 
                placeholder="input password"/>
                <StyleButton type="submit" width="100%" background={["145,231,246",0.5]}>
                로그인</StyleButton>
            </StyleForm>
        </LoginBox>
    </AuthBlock>)
}
export default LoginCom;