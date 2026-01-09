const Ref03Com = ({number, onRef, onState}) => {
    return(<>
    number : {number.current}<br />
    <button onClick={onRef}>REF</button>
    <button onClick={onState}>랜더링</button>
    </>)
}
export default Ref03Com;