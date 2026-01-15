import './App.css';
import Test03 from './components/test/TestCom03';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (<>
  <Routes>
    <Route path='/' element={<IndexCon />}/>
    <Route path='/login' element={<LoginCon />}/>
  </Routes>

  {/*
  <Test03 />
  */}
  </>);
}

export default App;
