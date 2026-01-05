import { useState } from "react";
import Quiz02Com from "../components/Quiz02Com";
function Quiz02Con(){
    const [msg, setMsg] = useState("")

    const IN = () => {
         setMsg("어서오세요^^")
    }
    const OUT = () => {
        setMsg("안녕히가세요~")
    }
    const refresh = () => {
        setMsg("")
    }
    return(<>
       <Quiz02Com 
       msg={msg} 
       IN={IN} 
       OUT={OUT} 
       refresh={refresh}/>
    </>)
}
export default Quiz02Con;