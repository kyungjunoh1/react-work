import Site from "./Site";

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
    
    return(<>
       <h1>app표현</h1>  
       <Site a_tag={a_tag} arr={arr} />
    </>)
}
export default App;