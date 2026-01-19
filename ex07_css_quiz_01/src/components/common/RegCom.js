import StyledButton from "./StyleButton";
import { StyleContentBlock, StyleContentWrap } from "./StyleContent";
import StyleForm from "./StyleForm";
import StyledInput from "./StyleInput";
import { ProductTitle } from "./StyleProduct";

const RegCom = ({onSubmit, onChange, username, password, role}) => {
    return(<>
       
            <ProductTitle>회 원 가 입</ProductTitle>
            <StyleForm onSubmit={onSubmit} width="30%" >
                <StyledInput name="username" value={username} onChange={onChange} 
                                                           placeholder="input username" />
                <StyledInput name="password" value={password} onChange={onChange} 
                                                           placeholder="input password"/>
                <StyledInput name="role" value={role} onChange={onChange} 
                                                           placeholder="input role"/>
                <StyledButton>회원 가입</StyledButton>
            </StyleForm>
        
    </>)
}
export default RegCom;