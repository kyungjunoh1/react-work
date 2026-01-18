import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { allMemberListThunk } from "../../service/authThunk";
import { StyleContentBlock, StyleContentWrap } from "./StyleContent";

const ListTitle = styled.h2`
text-align: center;
color: chocolate;
margin: 0 auto 30px;
font-size: 36px;
font-weight: normal;
letter-spacing: 10px;
`;
const Table = styled.table`
width: 100%;
border-collapse: collapse;
border-top: 2px solid black;
border-bottom: 2px solid black;
`;
const Thead = styled.thead``;
const Th = styled.th`
padding: 12px;
text-align: center;
font-weight: bold;
border-bottom: 1px solid black;
`;
const Tr = styled.tr`
border-bottom: 1px solid black;
`;
const Td = styled.td`
padding: 12px;
text-align: center;
`;
const ListCom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { members } = useSelector(state => state.memberData);
  const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(allMemberListThunk());
    }, [dispatch]);

    const handleMemberClick = (username) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(`/detail/${username}`);
  };

    return(
        <>
        <StyleContentBlock>
            <StyleContentWrap>
                <ListTitle>회 원 목 록</ListTitle>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>아이디</Th>
                            <Th>비밀번호</Th>
                            <Th>ROLE</Th>
                        </Tr>
                    </Thead>
                    <tbody>
                        {members.map((member, index) => (
                            <Tr key={index}>
                               <Td
                                onClick={() => handleMemberClick(member.username)}
                                 style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}
                                >
                                {member.username}
                                </Td>
                               <Td>{member.password}</Td>
                               <Td>{member.role}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </StyleContentWrap>
        </StyleContentBlock>
        </>
    );
};
export default ListCom;