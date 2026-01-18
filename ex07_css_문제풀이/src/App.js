import './App.css';
import Test03 from './components/test/TestCom03';
import IndexCon from './containers/IndexCon';
import ListCon from './containers/ListCon';
import LoginCon from './containers/LoginCon';
import DetailCon from './containers/DetailCon';
import RegisterCon from './containers/RegisterCon';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<IndexCon />}/>
    <Route path="/list" element={<ListCon />}/>
    <Route path="/login" element={<LoginCon />}/>
    <Route path="/register" element={<RegisterCon />}/>
    <Route path="/detail/:username" element={<DetailCon />}/>
  </Routes>

  {/*
  <Test03 />
  */}
  </>);
}

export default App;
