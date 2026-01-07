import './App.css';
import HeaderCom from './components/common/HeaderCom';
import NotFound from './components/common/NotFound';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import MDeletePage from './pages/member/MDeletePage';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  return (<>
    <Routes>
      <Route element={<HeaderCom />}>
      <Route path='/' element={<IndexPage />} />
        <Route path='/member/list' element={<MListPage />} />
        <Route path='/member/one' element={<MOnePage />} />
        <Route path='/member/delete/:id' element={<MDeletePage />} />
      </Route>
       <Route path='*' element={ <NotFound />} />
    </Routes>
  </>
  );
}
export default App;
