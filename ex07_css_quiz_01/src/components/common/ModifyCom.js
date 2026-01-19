import StyledButton from "./StyleButton";
import StyleForm from "./StyleForm";
import StyledInput from "./StyleInput";
import { ProductTitle } from "./StyleProduct";

const ModifyCom = ({onSubmit, onChange, username, password, role}) => {
    return(<>
       <ProductTitle>수 정 페 이 지</ProductTitle>
       <StyleForm onSubmit={onSubmit} width="30%">
           <StyledInput name="username" value={username} readOnly />
           <StyledInput name="password" value={password} onChange={onChange}/>
           <StyledInput name="role" value={role} onChange={onChange}/>
           <StyledButton>수정</StyledButton>
       </StyleForm>
    </>)
}
export default ModifyCom;