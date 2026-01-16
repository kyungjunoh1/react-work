import './App.css';
import Test03 from './components/test/TestCom03';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import RegisterCon from './containers/RegisterCon';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<IndexCon />}/>
    <Route path="/login" element={<LoginCon />}/>
    <Route path="/register" element={<RegisterCon />}/>
  </Routes>

  {/*
  <Test03 />
  */}
  </>);
}

export default App;
