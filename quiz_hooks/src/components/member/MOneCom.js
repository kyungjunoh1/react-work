
function MOneCom({user, onDelete}){
    return(<>
    <ul>
        <li>id : {user.id}</li>
        <li>pwd : {user.pwd}</li>
        <li>name : {user.name}</li>
        <li>addr : {user.addr}</li>
    </ul>
        <button onClick={onDelete}>삭제</button>
    </>)
}
export default MOneCom;