function Quiz02Com(props){
    console.log( props )
    const {msg:mm, IN, OUT, refresh} = props
    let message = "";
    if(mm === "")
        message = <b>아무값 없음</b>;
    else
        message = mm;
    return(<>
        삼항연산자 : { (mm === "") ? "없음" : mm}<br />
        msg : {mm}<br />
        message : {message}
        <br />
        <button onClick={IN}>IN</button>
        <button onClick={OUT}>OUT</button>
        <button onClick={refresh}>새로고침</button>
    </>)
}
export default Quiz02Com;