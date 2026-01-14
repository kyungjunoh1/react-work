const Counter = () => {

    const handleClick = () => {
        console.log("버튼 클릭됨");
    };

  return (
    <div>
      <div>Counter</div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};
const user = {name : "철수", age: 20 };

const updateAge = (u) => {
  return {...u, age:21};
};

const user2 = updateAge(user);

const nums = [1, 2, 3];

const result = nums.map(n => {
  if(n%2===0){
    return n*10;
  }
  return n;
});
console.log("nums : ",result)

export default Counter;