import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { getOne, memberDelete } from "../../service/member/member";

function MOneCon(){
    const [params] = useSearchParams();
    const [user, setUser] = useState({});
    const navigator = useNavigate();
    
    useEffect(()=>{
        setUser(getOne(params.get("id")))
    },[ params ]);
    
    const onDelete = () => {
        memberDelete(user.id)
        alert("삭제 되었습니다")
        navigator("/member/list/");
    };
    
    return(<>
       <MOneCom user={user} onDelete={onDelete} />
    </>)
}
export default MOneCon;