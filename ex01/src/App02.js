import logo from './logo.svg';
import './App.css';
import Test3 from './aaa';
import { Header } from './Header';
import { Nav } from './Nav';
import { Main } from './Main';
import Child from './child';
// ./: 현재위치 파일 표현
function App() {

  const num=1000;

  console.log("return값이 화면에 표현되는 값")
  const click = () => {
    alert('click event')
  }
  const str1="내용1";
  const str2="내용2";
  return ( //return 개수가 1개이상일때 그갑을 하나로 묶으면 표현됨.(<> ~ </>) 
    <>
     <Child n="n전달">
      {"내용전달"}{str1}{str2}
      </Child><hr></hr>

    num : {num}
    <Header test="연습중" number={num} />
    <Nav name="홍길동" addr="산골짜기" />
    <Main tel="전화번호" nick="도적" myClick = {click} />

    <div>내용 바꾸기</div>
    </>
  );
}

export default App;
