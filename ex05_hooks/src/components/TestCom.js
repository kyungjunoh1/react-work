const TestCom = ({onPlus, onMinus, data}) => {
    return(<>
    number : {data.number}<br />
    <button onClick={onPlus}>onPlus</button>
    <button onClick={onMinus}>onMinus</button>
    </>)
}
export default TestCom;