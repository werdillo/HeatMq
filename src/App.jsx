import './index.css';
import { Route, Routes } from "@solidjs/router";
import Layout from './components/Layout';
import Counter from './components/Counter';


function App() {
  return <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' component={Counter}/>
         <Route path='/about' element={<div>Hello wolrd</div>} />
        </Route>
      </Routes>
  </>
}

export default App;
