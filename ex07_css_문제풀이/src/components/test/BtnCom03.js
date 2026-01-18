import styled , {css} from "styled-components";

//const StyleButton = styled.button``;
//export default StyleButton;

export default styled.button`
  width : 300px; height : 50px;
  background-color: blue; color : white;
  border : none; border-radius : 5px;
  cursor : pointer;
  ${props => css`
      ${props.width && `width : ${props.width};` }
      ${props.bacground && `background-color : rgba(${props.bacground[0]},
                                                    ${props.bacground[1]});
      `}
    `}
  /*
    ${props => props.width && css`
        width : ${props.width};
    `}
    ${props => props.bacground && css`
        background-color : rgba(${props.bacground[0]},${props.bacground[1]});
    `}
    */
  &:hover {
  background-color: darkblue;
    ${props => props.bacground && css`
        background-color : rgba(${props.bacground[0]},${props.bacground[1] + 0.4});
    `}
  }
`;