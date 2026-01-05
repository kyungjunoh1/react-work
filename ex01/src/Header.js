function Header(props){
    console.log(props)
    return <h1>HEADER 영역<br></br>
        props.test : {props.test}<br></br>
        props.number : {props.number}<br></br><hr></hr>
    </h1>
}
export default Header;
