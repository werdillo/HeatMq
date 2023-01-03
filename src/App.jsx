import './index.css';
import { Route, Routes } from "@solidjs/router";
import Layout from './components/Layout';
import Counter from './components/Counter';


function App() {
  return <>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route path='/' component={Counter}/>
         <Route path='cabinet' element={<div>Hello hello</div>} />
         <Route path='log-in' element={<div>log in</div>} />
         <Route path='sign-in' element={<div>sign in</div>} />
        </Route>
      </Routes>
  </>
}

export default App;
