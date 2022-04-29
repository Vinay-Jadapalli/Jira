
import './App.css';
import Home from './Components/Cart/Home';
import {Routes, Route} from 'react-router-dom';
import CreateIssue from './Components/hasib/CreateIssue';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createissue' element={<CreateIssue />} />
      </Routes>
    </>
  );
}

export default App;
