import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getData } from "../../service/member/member";

function MListCon() {
    const [list, setList] = useState([]);

    useEffect(()=> {
        setList(getData());
    }, []);

    return(<>
      <MListCom list={list} />
    </>)
}
export default MListCon;