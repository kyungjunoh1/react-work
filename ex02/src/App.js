import Site from "./Site";
import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './contatiners/Ex01Con';
import Quiz01Con from './contatiners/Quiz01Con';
import Quiz02Con from './contatiners/Quiz02Con';
import Ex02Con from './contatiners/Ex02Con';
import Ex03Con from './contatiners/Ex03Con';
import Quiz03Con from './contatiners/Quiz03Con';

function App(){
    const a_tag = [
         {txt: "네이버", href : "https://www.naver.com"},
         {txt: "다음", href : "https://www.daum.net"},
         {txt: "구글", href : "https://www.google.co.kr"},
    ]
    const arr = [10, 20, 30]
    
    for(let i = 0; i < arr.length ; i++){
        console.log("i : "+i + ", arr[i] : "+arr[i])
    }
    const testMap = (value,index) => {
        console.log("index : "+index+", value : "+value) 
        return value * 10;
    }
    const arr2 = arr.map(testMap); //map: 주어진 값으로 반복 대입하여 값 도출하고, return으로 돌려줌.
    console.log("arr : "+arr)
    console.log("arr2 : "+arr2)

return ( <>
   <Quiz03Con />
   {/*
   <hr />
   <Ex03Con />
   <hr />
   <Ex02Con />
   <hr />
   <Quiz02Con />
   <hr />
   <Quiz01Con />
   <hr />
   <Ex01Con />
   <hr />
   <StateTest01 />
   */}
  </>);
}
export default App;
