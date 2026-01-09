import { useRef, useState } from "react";
import MRegCom from "../../components/member/MRegCom";
import { register } from "../../service/member/member";
import { useNavigate } from "react-router-dom";

const registerInput = {
    id:"", pwd:"", pwdChk:"", name:"", addr:""
}
const MRegCon= () => {
    const [reg, setReg] = useState(registerInput);
    const inputCheck = useRef([])
    const onChange = (e) => {
        setReg({...reg, [e.target.name] : e.target.value })
    }
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        for(let input of inputCheck.current){
            //console.log(input)
             if( input.value === ""){
            alert(input.name+" 필수!")
            input.focus();
            return;
           }
        }
            if(inputCheck.current[1].value === inputCheck.current[2].value)
            {
                alert("비밀번호 일치")
                const saveData = {...reg}
                delete saveData.pwdChk
                register(saveData)
                navigate("/member/list")
            }else{
                alert("비밀번호 다름")
                setReg({...reg, pwd:"", pwdChk:"" });
                inputCheck.current[1].focus();
            }
        
        /*
        inputCheck.current.forEach( (v, i) => {
           // console.log(v," : "+i)
           if( v.value === ""){
            alert(v.name+" 필수!")
           }
        })
        */
        /*
        console.log(reg)

        const saveData = {...reg}

        delete saveData.pwdChk
        console.log(saveData)

        register(saveData)
        navigate("/member/list")
        */
    }
    return(<>
    <MRegCom inputCheck={inputCheck }reg={reg} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MRegCon;