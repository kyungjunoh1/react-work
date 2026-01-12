const LoginCom = ({state, onChange}) => {
    console.log("com state :", state)
    return(<>
      <input type="text" name="id" value={state.login.id}
             onChange={onChange} /><br />
       <input type="text" name="pwd" value={state.pwd}
             onChange={onChange} /><br />
    </>)
}
export default LoginCom;