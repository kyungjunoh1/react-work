const LoginCom = ({onSumbit, onChange, username, pwd}) => {
    return(<>
    <form onSubmit={onSumbit}>
    <input type="text" value={username} name="id" onChange={onChange} /><br />
    <input type="text" value={pwd} name="pwd" onChange={onChange} /><br />
    <button>로그인</button>
    </form>
    </>)
}
export default LoginCom;