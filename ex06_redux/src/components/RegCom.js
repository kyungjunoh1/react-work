const RegCom = ({onSubmit, username, pwd, name, addr, onChange}) => {
    return(<>
    <form onSubmit={onSubmit}>
        <input type="text" name="id" value={username}
                            onChange={onChange} /><br />
        <input type="text" name="pwd" value={pwd}
                            onChange={onChange} /><br />
        <input type="text" name="name" value={name}
                            onChange={onChange} /><br />
        <input type="text" name="addr" value={addr}
                            onChange={onChange} /><br />
        <button>회원가입</button>                       
    </form>
    </>)
}
export default RegCom;