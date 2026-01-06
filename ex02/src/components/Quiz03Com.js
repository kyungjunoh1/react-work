function Quiz03Com({inBtn, outBtn, msg, inData, outData}){
    let msg2;
    if(msg === ""){
        msg2 = <b>오픈전</b>
    }else{
        msg2 = 
        <b>
        inData : {inData}<br />
        outData : {outData}<br />
        in - out = {inData - outData}<br />
        </b>
    }
    console.log( msg === "")
    
    return (<>
      {msg2}<hr />
      {(msg === "") ? <b>오픈전</b> : 
      <b>
       {msg}<br />
       inData : {inData}<br />
       outData : {outData}<br />
       in - out = {inData - outData}<br />
       </b>}
       <hr />
       <button onClick={inBtn}>IN</button>
       <button onClick={outBtn}>OUT</button>
    </>)
}
export default Quiz03Com;