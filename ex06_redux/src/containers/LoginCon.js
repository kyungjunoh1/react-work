import { useDispatch, useSelector } from "react-redux";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";

const LoginCon = () => {
    const dispatch = useDispatch();

   //저장소에 저장되어 있는 state를 꺼내는 역할
    const {id,pwd} = useSelector( state => {
        //console.log("logincon state : ", state)
        return state.input.login;
     })
    const onChange = (e) => {
      const {name, value} = e.target
      //console.log( name )
      //console.log( value )
      dispatch(inputSlice.actions.changeinput({name, value, form:"login"}) )
    }
    const onSumbit = async (e) => {
        e.preventDefault();
        //console.log(e.target)
        const result = await dispatch( loginThunk({ id:id, pwd }) )
        console.log("result : ", result);
    } 
    return(<>
    <LoginCom onSumbit={onSumbit} onChange={onChange} username={id} pwd={pwd} />
    </>)
}
export default LoginCon;