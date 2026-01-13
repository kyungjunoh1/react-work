const Counter = () => {

    const handleClick = () => {
        console.log("버튼 클릭됨");
    };

  return (
    <div>
      <div>Counter</div>
      <button onClick={handleClick()}>클릭</button>
    </div>
  );
};

export default Counter;