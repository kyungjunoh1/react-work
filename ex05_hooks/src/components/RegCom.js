const RegCom = ({error, loading, onSubmit, onChange, username, pwd, name, addr}) => {
    return(<>
    {
    loading?(<h3>회원 가입 진행 중...</h3>)
     :error?(<h3>{error}</h3>)
     :(<form onSubmit={onSubmit}>
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
     )
    }
    
    </>)
}
export default RegCom;