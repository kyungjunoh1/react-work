const ReducerCom = ({state, onClick, onDown}) => {
    console.log("state : ", state)
    return(<>
      value : {state.value}<br />
      name : {state.name}<br />
      <button onClick={onClick}>클릭</button>
      <button onClick={onDown}>Down</button>
    </>)
}
export default ReducerCom;