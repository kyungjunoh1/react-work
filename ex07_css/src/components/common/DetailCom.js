import { useDispatch, useSelector } from "react-redux"
import { deleteMemberThunk, getMemberByIdThunk, updateMemberThunk } from "../../service/authThunk";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailCom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useParams();

    const { isLoggedIn } = useSelector(state => state.auth);
    const { currentMember } = useSelector(state => state.memberData);

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
    password: '',
    role: ''
  });
    
    useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    dispatch(getMemberByIdThunk(username));
  }, [isLoggedIn, username, dispatch, navigate]);

  useEffect(() => {
    if (currentMember) {
      setEditData({
        password: '',
        role: currentMember.role
      });
    }
  }, [currentMember]);

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
        await dispatch(deleteMemberThunk(username)).unwrap();
        navigate("/list");
    }
  };

  const handleUpdate = async () => {
      const updatedData = {};
      if (editData.password) updatedData.password = editData.password;
      if (editData.role) updatedData.role = editData.role;
      await dispatch(updateMemberThunk({ 
        username, 
        updatedData
      })).unwrap();

      setIsEditing(false);
      navigate("/list");
      dispatch(getMemberByIdThunk(username));
    }
   
  if (!currentMember) return <p>회원 정보를 불러오는 중...</p>;

    return(
    <div className="member-detail">
      <h2>개인 정보</h2>
     {!isEditing ? (
        <>
          <div>
            <p>username</p>
            <p>- {currentMember.username}</p>
          </div>
          <div>
            <p>password</p>
            <p>- {currentMember.password}</p>
          </div>
          <div>
            <p>role</p>
            <p>- {currentMember.role}</p>
          </div>
          <div>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={() => setIsEditing(true)}>수정</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>username</p>
            <p>- {currentMember.username}</p>
          </div>
          <div>
            <p>password</p>
            <input
              type="password"
              value={editData.password}
              onChange={(e) => setEditData({...editData, password: e.target.value})}
              placeholder="새 비밀번호"
            />
          </div>
          <div>
            <p>role</p>
            <input
              type="text"
              value={editData.role}
              onChange={(e) => setEditData({...editData, role: e.target.value})}
            />
          </div>
          <div>
            <button onClick={() => setIsEditing(false)}>취소</button>
            <button onClick={handleUpdate}>수정</button>
          </div>
        </>
      )}
    </div>
    );
};
export default DetailCom;
