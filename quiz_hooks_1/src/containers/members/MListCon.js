import { useEffect, useState } from 'react';
import MListCom from '../../components/member/MListCom';
import { getList } from '../../service/member/member';

function MListCon(){
    const [data, setData] = useState([]);
    //console.log(getList())
    useEffect( ()=>{
        setData(getList())
         /*
        const getData = async () => {
            const res = await getList() 
            console.log("res : ",res)
             const data = await res.json() 
            console.log("data : ",res)
            setData(data)
        }
        getData();*/

     //setData( getList());
    }, [] );
    
    return (<>
        <MListCom data={data}/>
    </>)
}
export default MListCon;