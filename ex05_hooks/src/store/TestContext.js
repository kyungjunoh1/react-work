import { useState, createContext } from "react";


export const TestContext = createContext();
const initState = {number : 0}
export const TestProvider = ({children}) => {
    const [data, setDate] = useState(initState);

    const clickPlus = () => { //alert("clickPlus")
        setDate({number : data.number +1})
    }
    const clickSub = () => { //alert("clickSub")
        setDate({number : data.number -1})
    }
    const value = {clickPlus, clickSub, data}
    return(<>
         <TestContext.Provider value ={value}>
            {children}
         </TestContext.Provider>
    </>)
}


/*
const TestContext = () => {
    
    return(<>
      <Test01 name="값 설정">111</Test01>
    </>)
}
function Test01({children, name}){
    console.log("props :", children)
    console.log("props :", name)
    return(<>Test01</>)
}
export default TestContext;
*/