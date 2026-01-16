import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setInput } from "../../redux/inputSlice";
import { registerThunk } from "../../service/authThunk";
import { useEffect } from "react";
import StyleForm from "./StyleForm";
import StyleInput from "./Styleput";
import StyleButton from "./StyleButton";

const RegisterBlock = styled.div`
position: absolute;
left: 0; top: 0; bottom: 0; right: 0;
`;

const RegisterBox = styled.div`
position: absolute;
width: 360px; min-height: 250px;
top: 150px; left: calc(50% - 180px);
background-color: white;
padding-top: 20px;
border-radius: 5px;
.logo-style {
    text-align: center;
    font-weight: bold;
    letter-spacing: 5px; font-size: 20px;
    padding-bottom: 5px;
    width: 50%; margin: 0 auto;
    a{ color: orange; &:hover {color: aqua;}}
}
`;

const RegisterCom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, password, role } = useSelector(state => state.input);
    const { regresult } = useSelector(state => state.auth);

    const handleChange = (e) => {
        dispatch(setInput({
            name: e.target.name,
            value: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerThunk({ username, password, role }));
    };
    useEffect(() => {
        if(regresult === 0) navigate("/login");
    }, [regresult, navigate]);

    return(
        <RegisterBlock>
            <RegisterBox>
                <div className="logo-style">
                    <Link to="/">회원가입</Link>
                </div>
                <StyleForm onSubmit={handleSubmit}>
                    <StyleInput
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={handleChange} />
                    <StyleInput
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handleChange} />
                    <StyleInput
                        name="role"
                        placeholder="role"
                        value={role}
                        onChange={handleChange} />
                    <StyleButton type="submit" width="35%" background="gray">
                    REGISTER</StyleButton>
                </StyleForm>
            </RegisterBox>
        </RegisterBlock> )
};
export default RegisterCom;