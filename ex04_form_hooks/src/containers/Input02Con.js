import { useState } from "react";
import Input02com from "../components/Input02Com";

const Input02con = () => {
   const [name, setName] = useState("");
   const [addr, setAddr] = useState("");
   const [age, setAge] = useState("");
   const [data, setData] = useState({name01: "1", addr01: "2", age01: "3"})
   const onChange = ( e ) => {

         //setData( {name01: "1변경", addr01:data.addr01, age01: "3"} )
         //setData( {...data, addr01 : "새롭게 변경"})
         setData( {...data, [e.target.name] : e.target.value})

    console.log( e.target )
    if(e.target.name === "name")
    setName( e.target.value )
    else if(e.target.name === "addr")
        setAddr( e.target.value )
     else if(e.target.name === "age")
        setAge( e.target.value )
   }
    return (<>
      <Input02com onChange={onChange} name={name} addr={addr} age={age}
      data={data}/>
    </>)
}
export default Input02con;